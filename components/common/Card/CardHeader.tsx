// packages
import React from 'react';

interface PCardHeader {
  title: string;
  href?: string;
}

const CardHeader: React.FC<PCardHeader> = ({ title, href }) => {
  return (
    <h1 className='text-neutral-300 font-semibold leading-snug tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
      {href ? (
        <a href={href} title={title} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
    </h1>
  );
};

export default CardHeader;
