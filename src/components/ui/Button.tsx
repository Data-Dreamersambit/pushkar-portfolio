import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type LinkProps = BaseProps & { to: string; href?: never; onClick?: never; type?: never };
type ButtonProps = BaseProps & {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};
type AnchorProps = BaseProps & { href: string; to?: never; onClick?: never; type?: never };

const styles: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-signal text-[#04150e] hover:bg-signal-strong border border-transparent",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-signal hover:text-signal",
  ghost: "bg-transparent text-text-muted hover:text-text border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-medium font-body text-sm transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed";

export function Button(props: LinkProps | ButtonProps | AnchorProps) {
  const { children, variant = "primary", className = "" } = props;
  const cls = `${base} ${styles[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  const { onClick, type = "button", disabled } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
