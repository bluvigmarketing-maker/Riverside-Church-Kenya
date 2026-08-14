import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Content lives in Supabase and is edited directly via the Table Editor in
// Phase 1 (no admin dashboard yet) — revalidate periodically so those edits
// show up without a full redeploy. Individual routes can override this.
export const revalidate = 300;

export const metadata: Metadata = {
  title: {
    default: "River Church Eldoret",
    template: "%s | River Church Eldoret",
  },
  description:
    "River Church Eldoret — carrying the presence, love, power, and hope of Jesus Christ to Marura, Eldoret, and beyond. Where God's River Never Runs Dry, it just flows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
