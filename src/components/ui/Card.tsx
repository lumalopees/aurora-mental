type CardProps = Readonly<{
  title: string;
  description: string;
}>;

export function Card({ title, description }: CardProps) {
  return (
    <article className="card">
      <h3 style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>{title}</h3>
      <p style={{ color: "var(--text-muted)" }}>{description}</p>
    </article>
  );
}
