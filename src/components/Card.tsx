import React from 'react';
import clsx from 'clsx';

interface CardProps
{
  label?: string;
  translucent?: 'bg-opacity-0' | 'bg-opacity-50' | 'bg-opacity-25';
  border?: 'border-dashed';
  children: React.ReactNode;
  className?: string;
}

export function Card({ label, translucent, border, children, className }: CardProps)
{
  return (
    <div aria-label={label} className={clsx('bg-white rounded p-8', translucent, translucent && translucent !== 'bg-opacity-0' && 'backdrop-blur', border, className)}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  label: undefined,
  translucent: undefined,
  border: undefined,
  className: undefined,
};
