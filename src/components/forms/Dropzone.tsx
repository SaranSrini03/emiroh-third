"use client";

import React, { useMemo } from "react";

type DropzoneProps = {
  icon: React.ReactNode;
  text: string;
  hint?: string;
  multiple?: boolean;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Dropzone({ icon, text, hint, multiple, accept, onChange }: DropzoneProps) {
  const id = useMemo(() => Math.random().toString(36).slice(2), []);
  return (
    <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 p-6">
      <label htmlFor={id} className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          {icon}
        </div>
        <div className="text-sm font-medium text-gray-900">{text}</div>
        {hint && <div className="text-xs text-gray-500">{hint}</div>}
      </label>
      <input id={id} type="file" className="hidden" multiple={multiple} accept={accept} onChange={onChange} />
    </div>
  );
}
