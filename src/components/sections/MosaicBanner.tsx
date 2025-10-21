"use client";
import React from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function MosaicBanner({ src, alt = "", className = "" }: Props) {
  return (
    <div className={className}>
      <div className="rounded-3xl overflow-hidden bg-white shadow-none">
        <div className="aspect-[1024/359] w-full relative">
          <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
