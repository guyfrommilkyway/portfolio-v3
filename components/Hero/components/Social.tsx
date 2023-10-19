// packages
import React from 'react';

const Link: React.FC<SocialProps> = props => {
  const { name, link, icon } = props;

  return (
    <a
      className='text-sm text-neutral-400 font-medium leading-none uppercase transition ease-in-out delay-100 hover:text-white hover:underline'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='sr-only'>{name}</span>
      {icon}
    </a>
  );
};

export default Link;
