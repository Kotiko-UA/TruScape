'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputProps {
  label?: string;
  id?: string;
}

export default function InputField({ label, id, ...rest }: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-grey-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-grey-300 shadow"
      />
    </div>
  );
}
