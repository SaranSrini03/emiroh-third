"use client";

import React from "react";

type FieldProps = React.PropsWithChildren<{ label: string; icon?: React.ReactNode }>;
export default function Field({ label, icon, children }: FieldProps) {
  return (
    <label className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 md:items-center">
      <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {icon && (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
            {icon}
          </span>
        )}
        {label}
      </span>
      <div className="w-full">{children}</div>
    </label>
  );
}
