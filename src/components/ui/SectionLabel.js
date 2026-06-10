/**
 * SectionLabel — kicker técnico numerado con hairline naranja
 * Diseño industrial dark: mono uppercase, naranja, tracking amplio.
 */
export default function SectionLabel({ index, kicker, title, lead, align = "left", light = false, className = "" }) {
  const alignClass =
    align === "center" ? "text-center items-center" :
    align === "right"  ? "text-right items-end" :
    "text-left items-start";

  const titleColor = light ? "text-[color:var(--color-text-light)]" : "text-[color:var(--color-text-dark)]";
  const leadColor  = light ? "text-[color:var(--color-text-light-muted)]" : "text-[color:var(--color-text-muted)]";

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignClass} ${className}`}>
      {/* Technical kicker */}
      {(index || kicker) && (
        <div className="flex items-center gap-3">
          {align !== "center" && align !== "right" && (
            <span className="block w-6 h-px bg-[color:var(--color-brand)]" aria-hidden="true" />
          )}
          <p className="font-[family-name:var(--font-mono-code)] text-[length:var(--text-label)] uppercase tracking-[0.16em] text-[color:var(--color-brand)] select-none">
            {index && kicker ? `${index} — ${kicker}` : (index || kicker)}
          </p>
        </div>
      )}

      {/* H2 editorial */}
      {title && (
        <h2 className={`font-[family-name:var(--font-inter)] font-black text-[length:var(--text-h2)] leading-[1.05] tracking-[-0.03em] ${titleColor}`}>
          {title}
        </h2>
      )}

      {/* Bottom orange accent line */}
      <span
        className={`block h-0.5 w-10 bg-[color:var(--color-brand)] ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
        aria-hidden="true"
      />

      {lead && (
        <p className={`text-[length:var(--text-lead)] leading-relaxed max-w-2xl ${leadColor} ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
