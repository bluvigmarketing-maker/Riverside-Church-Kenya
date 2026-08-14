import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@/lib/content";
import { NAV_LINKS } from "./nav-links";

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="River Church Eldoret"
            width={160}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="text-sm text-navy-300">
            {settings?.motto ?? "Where God's River Never Runs Dry, it just flows"}
          </p>
          <p className="text-sm text-navy-300">{settings?.address ?? "Marura, Eldoret, Kenya"}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg text-gold-300">Quick Links</h3>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              className="text-sm text-navy-200 transition-colors hover:text-gold-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg text-gold-300">Get in Touch</h3>
          {settings?.phone && <p className="text-sm text-navy-200">{settings.phone}</p>}
          {settings?.email && <p className="text-sm text-navy-200">{settings.email}</p>}
          <p className="text-sm text-navy-400">
            {!settings?.phone && !settings?.email
              ? "Contact details coming soon — use the Contact page for now."
              : null}
          </p>
        </div>
      </div>

      <div className="border-t border-navy-800 py-6 text-center text-xs text-navy-400">
        © {new Date().getFullYear()} River Church Eldoret. All rights reserved.
      </div>
    </footer>
  );
}
