import { Container } from "./container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-navy-950 py-16 text-center text-white sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-3">
          {eyebrow && (
            <span className="text-xs font-semibold tracking-wide text-gold-300 uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">{title}</h1>
          <span className="h-px w-16 bg-gold-400" />
          {description && (
            <p className="max-w-2xl text-navy-100">{description}</p>
          )}
        </div>
      </Container>
    </div>
  );
}
