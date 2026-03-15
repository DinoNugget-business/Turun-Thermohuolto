type Props = {
  title: string;
  subtitle?: string;
  light?: boolean;
  accent?: boolean;
  align?: "center" | "left";
};

export default function SectionHeading({
  title,
  subtitle,
  light,
  accent,
  align = "center",
}: Props) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      {accent && (
        <div
          className={`w-12 h-1 bg-cyan rounded-full mb-4 ${
            isCenter ? "mx-auto" : ""
          }`}
        />
      )}
      <h2
        className={`font-[var(--font-display)] font-bold text-3xl sm:text-4xl mb-3 ${
          light ? "text-text-light" : "text-text"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          } ${light ? "text-text-light-muted" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
