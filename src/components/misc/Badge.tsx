"use client";

import Link from "next/link";

interface BadgeProps {
  label: string | number;
  color?: string;   // Tailwind text color
  bgColor?: string; // Tailwind bg color
  href?: string;    // optional link
  onClick?: () => void; // optional click handler
}

export default function Badge({
  label,
  color = "text-purple-700",
  bgColor = "bg-purple-200",
  href,
  onClick,
}: BadgeProps) {
  const classes = `
    px-3 py-1 ml-5 rounded-full text-xs font-medium cursor-pointer 
    transition hover:opacity-80 ${color} ${bgColor}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <span onClick={onClick} className={classes}>
      {label}
    </span>
  );
}
