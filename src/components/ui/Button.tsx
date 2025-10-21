import React from "react";

type ButtonProps = {
  label: string;
  width?: number | string;
  height?: number | string;
  color?: string; // text color
  bgColor?: string;
  gradient?: string;
  borderColor?: string;
  radius?: number | string;
  href?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  disabled?: boolean;
};

export default function Button({
  label,
  width,
  height,
  color = "black",
  bgColor = "white", // red-500
  gradient,
  borderColor,
  radius = 999,
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  disabled,
}: ButtonProps) {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    color,
    background: gradient || bgColor,
    borderColor,
    borderWidth: borderColor ? 1 : undefined,
    borderStyle: borderColor ? "solid" : undefined,
    borderRadius: typeof radius === "number" ? `${radius}px` : radius,
  };

  const classes = `inline-flex items-center justify-center text-sm font-medium transition-colors hover:opacity-90 ${className}`.trim();

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} style={style} aria-label={label}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style} disabled={disabled} aria-label={label}>
      {label}
    </button>
  );
}
