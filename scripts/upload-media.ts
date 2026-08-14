/**
 * One-time script: uploads the source images from `Images/` into the
 * Supabase Storage `media` bucket, at the paths referenced by
 * supabase/seed.sql. Run locally only (needs the service-role key) — never
 * deploy or commit this script's output/env values.
 *
 * Usage:
 *   1. Create a public bucket named "media" in your Supabase project (Storage tab).
 *   2. Fill in .env.local (see .env.example), including SUPABASE_SERVICE_ROLE_KEY.
 *   3. npm run upload-media
 */
import { createClient } from "@supabase/supabase-js";
import { readFile } from "node:fs/promises";
import path from "node:path";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in your environment. See .env.example."
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey);
const BUCKET = "media";
const ROOT = path.resolve(__dirname, "..");

// sourcePath is relative to the repo root; destPath is the path inside the
// `media` bucket that supabase/seed.sql expects.
const UPLOADS: { sourcePath: string; destPath: string }[] = [
  {
    sourcePath: "Images/Gallery/Senior Pastor Bornes Biwott.jpeg",
    destPath: "leadership/pastor-borness.jpg",
  },
  {
    sourcePath: "Images/Gallery/Associate Pastor Ezra Biwott.jpeg",
    destPath: "leadership/pastor-ezra.jpg",
  },
  {
    sourcePath: "Images/Gallery/Senior Pastor Bornes Biwott 2.jpeg",
    destPath: "gallery/pastor-borness-2.jpg",
  },
  {
    sourcePath:
      "Images/Gallery/Associate Pastor Ezra Biwott and Senior Pastor Bornes Biwott .jpeg",
    destPath: "gallery/both-pastors.jpg",
  },
];

async function main() {
  for (const { sourcePath, destPath } of UPLOADS) {
    const fullPath = path.join(ROOT, sourcePath);
    const file = await readFile(fullPath);

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(destPath, file, {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (error) {
      console.error(`Failed to upload ${sourcePath} -> ${destPath}:`, error.message);
    } else {
      console.log(`Uploaded ${sourcePath} -> ${BUCKET}/${destPath}`);
    }
  }
}

main();
