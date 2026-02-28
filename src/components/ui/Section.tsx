type SectionProps = Readonly<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}>;

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        <div style={{ marginTop: "1.5rem" }}>{children}</div>
      </div>
    </section>
  );
}
