import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SiteSettings } from "@/lib/types";

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* sizes carries a 0px hint for the breakpoint each image is CSS-hidden at,
          so the browser doesn't fetch both full-size images on every device. */}
      <Image
        src="/images/hero-desktop.jpg"
        alt="River flowing through a forest, symbolizing the river of life"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="hidden object-cover object-center md:block"
      />
      <Image
        src="/images/hero-mobile.jpg"
        alt="River flowing through a forest, symbolizing the river of life"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="object-cover object-center md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
        <span className="inline-flex items-center rounded-full border border-gold-400/60 px-3 py-1 text-xs font-semibold tracking-wide text-gold-300 uppercase">
          River Church Eldoret
        </span>
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Welcome to River Church Eldoret
        </h1>
        <p className="font-heading text-lg text-gold-200 italic sm:text-xl">
          {settings.motto}
        </p>
        <p className="max-w-2xl text-base text-navy-100 sm:text-lg">
          A life-giving church carrying the presence, love, power, and hope of Jesus Christ to
          our community and beyond.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="btn-metallic gold-line px-6 font-semibold"
          >
            Join Us This Sunday
          </Button>
          <Button
            render={<Link href="/about/history" />}
            variant="outline"
            size="lg"
            className="gold-line border-white/40 bg-transparent px-6 font-semibold text-white hover:bg-white/10"
          >
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
