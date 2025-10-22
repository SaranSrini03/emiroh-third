"use client";

import Link from "next/link";
import React from "react";

interface GradientButtonProps {
  href?: string; // Acts as link if provided
  label: React.ReactNode;
  width?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: "vertical" | "horizontal";
  className?: string;
  colors?: string; // Custom gradient override
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function GradientButton({
  href,
  label,
  width = "w-auto",
  onClick,
  variant = "vertical",
  className = "",
  colors,
  disabled = false,
  type = "button",
}: GradientButtonProps) {
  const baseClasses = `
    block px-6 py-2 text-center font-semibold rounded-full
    shadow-lg transition-all duration-300 transform hover:scale-[1.02]
    ${width}
  `;

  const gradients = {
    vertical: "bg-gradient-to-b from-[#264d99] to-[#66b3ff] hover:opacity-90 text-white",
    horizontal: "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:shadow-xl text-white",
  };

  const combinedClasses = `
    ${baseClasses}
    ${colors ? colors : gradients[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {label}
    </button>
  );
}

