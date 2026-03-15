type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 relative overflow-hidden" style={{ backgroundColor: "#0C1824" }}>
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] -top-[250px] -right-[100px] blur-3xl" style={{ background: "#0ACDDF" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-[0.06] -bottom-[150px] -left-[50px] blur-2xl" style={{ background: "#2A4F7A" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1
          className="page-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-3"
          style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="page-subtitle text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "#8A9BB0" }}>
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-1 rounded-full page-accent" style={{ background: "#0ACDDF" }} />
      </div>
    </section>
  );
}
