import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-emergency text-white hover:bg-emergency-dark btn-shimmer shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-steel text-white hover:bg-steel-light shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-cyan text-cyan hover:bg-cyan hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
