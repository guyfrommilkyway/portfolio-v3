// packages
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-8 lg:gap-4 w-full min-h-[75px] py-8'>
      <div className='block text-sm text-center text-neutral-300'>
        <p className='select-none'>
          Made from Figma. Built using TypeScript, Next.js and Tailwind.
        </p>
        <p className='select-none'>
          Integrated with Firebase. Deployed with Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
