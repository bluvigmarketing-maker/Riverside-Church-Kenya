/**
 * One-time bootstrap: creates the very first super_admin account. Every
 * account after this one is created from the dashboard's Staff page instead
 * (which needs an existing super admin signed in to use it).
 *
 * Usage (after running supabase/migrations/0002_admin_dashboard.sql):
 *   npm run create-super-admin -- someone@example.com "a-strong-password"
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const [, , email, password] = process.argv;

if (!email || !password) {
  console.error('Usage: npm run create-super-admin -- someone@example.com "a-strong-password"');
  process.exit(1);
}

if (!url || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in your environment. See .env.example."
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey);

async function main() {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error || !data.user) {
    console.error("Failed to create user:", error?.message);
    process.exit(1);
  }

  const { error: profileError } = await supabase.from("profiles").insert({
    id: data.user.id,
    email,
    role: "super_admin",
    permissions: [],
  });

  if (profileError) {
    console.error(
      "User was created in Supabase Auth, but the profile row failed:",
      profileError.message,
      "\nMake sure supabase/migrations/0002_admin_dashboard.sql has been run."
    );
    process.exit(1);
  }

  console.log(`Super admin created: ${email}`);
  console.log("They can sign in at /admin/login with the password you provided.");
}

main();
