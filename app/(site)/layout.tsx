import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Content is admin-editable now, but ISR keeps public pages fast without
// needing on-demand revalidation for every possible edit path.
export const revalidate = 300;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
