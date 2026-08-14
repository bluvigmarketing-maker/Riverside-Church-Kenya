import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            light
              ? "border-gold-400/40 text-gold-300"
              : "border-gold-400/60 text-gold-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold sm:text-4xl",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      <span className="h-px w-16 bg-gold-400" />
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base",
            align === "center" && "mx-auto",
            light ? "text-navy-100" : "text-navy-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
