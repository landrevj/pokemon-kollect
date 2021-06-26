import React from 'react';
import clsx from 'clsx';

interface CardProps
{
  label: string;
  translucent?: 'bg-opacity-0' | 'bg-opacity-50' | 'bg-opacity-25';
  border?: 'border-dashed';
  children: React.ReactNode;
  className?: string;
}

export function Card({ label, translucent, border, children, className }: CardProps)
{
  return (
    <div aria-label={label} className={clsx('w-full bg-white rounded p-8', translucent, translucent && 'backdrop-blur', border, className)}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  transparent: undefined,
  border: undefined,
  className: undefined,
};
