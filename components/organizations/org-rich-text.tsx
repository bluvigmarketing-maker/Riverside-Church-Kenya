/**
 * Renders an organization_sections.body value: blank lines separate
 * paragraphs, "- " starts a bullet list, and a line wrapped in "**like
 * this**" on its own renders as a small bold label (e.g. "**Objectives**").
 * Same free-text-in-a-textarea convention as history_sections.body /
 * leaders.bio, extended with bullets + labels so admins can lay out
 * structured content (objectives, expected impact, focus areas) without a
 * more rigid schema.
 */
export function OrgRichText({
  body,
  tone = "light",
}: {
  body: string;
  tone?: "light" | "dark";
}) {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const textColor = tone === "dark" ? "text-purple-100" : "text-purple-900/90";
  const labelColor = tone === "dark" ? "text-gold-300" : "text-purple-700";

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        const labelMatch = block.match(/^\*\*(.+)\*\*$/);
        if (labelMatch) {
          return (
            <p key={i} className={`mt-2 text-xs font-semibold tracking-wide uppercase ${labelColor}`}>
              {labelMatch[1]}
            </p>
          );
        }

        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const isBulletList = lines.length > 0 && lines.every((l) => l.startsWith("- "));
        if (isBulletList) {
          return (
            <ul key={i} className="flex flex-col gap-1.5">
              {lines.map((line, j) => (
                <li key={j} className={`flex items-start gap-2 ${textColor}`}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  <span>{line.replace(/^- /, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className={textColor}>
            {lines.join(" ")}
          </p>
        );
      })}
    </div>
  );
}
