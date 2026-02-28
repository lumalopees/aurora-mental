import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export function Button({ label, href, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "44px",
        padding: "0.7rem 1rem",
        borderRadius: "var(--radius-md)",
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "var(--shadow-sm)",
        ...(variant === "primary"
          ? {
              background: "var(--primary)",
              color: "#fff",
              border: "1px solid var(--primary)"
            }
          : {
              background: "var(--surface)",
              color: "var(--primary-strong)",
              border: "1px solid var(--line)"
            })
      }}
      aria-label={label}
    >
      {label}
    </Link>
  );
}
