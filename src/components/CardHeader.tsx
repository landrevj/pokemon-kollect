import React from 'react';

interface CardHeaderProps
{
  text: string;
}

export function CardHeader({ text }: CardHeaderProps)
{
  return (
    <header className='z-10 place-self-start ml-4 -mb-4 text-3xl bg-gray-100 px-4 py-2 rounded-lg'>{text}</header>
  );
}
