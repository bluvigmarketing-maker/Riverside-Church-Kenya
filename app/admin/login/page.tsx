import { Button } from "@/components/ui/button";
import { signIn } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-50 px-4">
      <div className="gold-line w-full max-w-sm rounded-2xl border bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
          River Church Eldoret
        </p>
        <h1 className="mt-1 font-heading text-2xl font-semibold text-navy-950">
          Admin Sign In
        </h1>

        <form action={signIn} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-navy-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg border border-navy-200 px-3 py-2 text-navy-950 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-navy-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="rounded-lg border border-navy-200 px-3 py-2 text-navy-950 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="btn-metallic gold-line font-semibold">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
