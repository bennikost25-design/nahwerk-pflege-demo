import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "terracotta";
  size?: "md" | "lg";
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href">;

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-brand text-on-brand hover:bg-brand-deep border border-transparent",
  secondary:
    "bg-transparent text-petrol border border-petrol/30 hover:border-petrol hover:bg-elevated/70",
  ghost:
    "bg-transparent text-petrol border border-transparent hover:bg-cream-deep",
  terracotta:
    "bg-terracotta text-on-brand hover:bg-[#a55c41] border border-transparent",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "min-h-11 px-5 text-[0.95rem]",
  lg: "min-h-12 px-6 text-base",
};

function buttonClasses(
  variant: NonNullable<CommonProps["variant"]>,
  size: NonNullable<CommonProps["size"]>,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold tracking-wide transition-colors duration-200",
    "disabled:opacity-55 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );
}

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    ...rest
  } = props;

  const classes = buttonClasses(variant, size, className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkRest } = rest;
    if (isInternalPath(href)) {
      return (
        <Link href={href} className={classes} {...linkRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} type={buttonRest.type ?? "button"} {...buttonRest}>
      {children}
    </button>
  );
}
