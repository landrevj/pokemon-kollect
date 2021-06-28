import React from 'react';

interface CardHeaderProps
{
  text: string;
  children?: React.ReactNode;
}

export function CardHeader({ text, children }: CardHeaderProps)
{
  return (
    <div className='flex flex-row flex-wrap mb-4 gap-4'>
      <h1 className='text-3xl bg-gray-100 px-4 py-2 rounded-lg'>{text}</h1>
      {children}
    </div>
  );
}

CardHeader.defaultProps = {
  children: undefined,
};
