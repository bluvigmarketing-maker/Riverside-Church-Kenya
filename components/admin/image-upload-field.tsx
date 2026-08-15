"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, Loader2, ImageOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { getMediaUrl } from "@/lib/supabase/media";

/**
 * Uploads directly to Supabase Storage from the browser (the authenticated
 * session cookie already grants the right folder-scoped permission per
 * supabase/migrations/0002_admin_dashboard.sql), then exposes the resulting
 * bucket-relative path via a hidden input so it submits along with the rest
 * of the surrounding <form action={serverAction}>.
 */
export function ImageUploadField({
  name,
  folder,
  defaultPath,
  label = "Photo",
}: {
  name: string;
  folder: string;
  defaultPath?: string | null;
  label?: string;
}) {
  const [path, setPath] = useState(defaultPath ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const previewUrl = getMediaUrl(path);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop() || "jpg";
      const objectPath = `${folder}/${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(objectPath, file, { upsert: true });

      if (uploadError) throw uploadError;
      setPath(objectPath);
    } catch {
      setError("Upload failed — please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-navy-900">{label}</label>
      <div className="flex items-center gap-4">
        <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-navy-100">
          {previewUrl ? (
            <Image src={previewUrl} alt="" fill sizes="80px" className="object-cover" />
          ) : (
            <ImageOff className="size-6 text-navy-400" aria-hidden="true" />
          )}
        </div>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-navy-200 px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50">
          {uploading ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Upload className="size-4" aria-hidden="true" />
          )}
          {uploading ? "Uploading…" : "Choose image"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <input type="hidden" name={name} value={path} />
    </div>
  );
}
