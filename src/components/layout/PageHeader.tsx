type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="page-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-3 text-text-light font-display">
          {title}
        </h1>
        {subtitle && (
          <p className="page-subtitle text-base sm:text-lg max-w-2xl leading-relaxed text-text-light-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
