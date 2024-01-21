'use client';

import React from 'react';
import Image from 'next/image';

interface LogoUploaderProps
  extends Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>> {
  label: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-grey-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center h-40 bg-white border border-slate-900 border-dashed cursor-pointer w-40 rounded-full"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input {...rest} id={id} type="file" className="hidden" />
      </label>
    </div>
  );
}
