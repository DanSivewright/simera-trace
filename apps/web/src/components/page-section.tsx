import { cn } from "@simera-trace/ui/lib/utils";

type PageSectionPattern = "hex" | "dots" | "grid" | "none";
type PageSectionVariant =
  | "default"
  | "hero"
  | "band"
  | "panel"
  | "featured"
  | "footer";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: PageSectionVariant;
  pattern?: PageSectionPattern;
};

const variantClasses: Record<PageSectionVariant, string> = {
  default: "relative",
  hero: "page-section-hero relative overflow-hidden",
  band: "page-section-band relative overflow-hidden",
  panel: "page-section-panel relative",
  featured: "page-section-featured relative overflow-hidden",
  footer: "page-section-footer relative overflow-hidden",
};

const patternClasses: Record<PageSectionPattern, string> = {
  hex: "page-pattern-hex",
  dots: "page-pattern-dots",
  grid: "page-pattern-grid",
  none: "",
};

export function PageSection({
  children,
  className,
  variant = "default",
  pattern = "none",
}: PageSectionProps) {
  return (
    <section
      className={cn(
        variantClasses[variant],
        pattern !== "none" && patternClasses[pattern],
        className,
      )}
    >
      {variant === "hero" ? (
        <div aria-hidden className="page-hero-glow pointer-events-none absolute inset-0" />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
