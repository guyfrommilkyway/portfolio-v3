// packages
import React from 'react';

const Link: React.FC<SocialProps> = props => {
  const { username, link, icon } = props;

  return (
    <a
      className='flex items-center gap-2 text-neutral-400 font-medium leading-none transition ease-in-out delay-100 hover:text-white hover:underline'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
      <span className='select-none'>{username}</span>
    </a>
  );
};

export default Link;
