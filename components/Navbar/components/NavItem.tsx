// packages
import React from 'react';
import Link from 'next/link';

const NavItem: React.FC<NavItemProps> = props => {
  const { name, link } = props;

  return (
    <Link
      className='text-neutral-300 hover:underline hover:text-white transition-colors ease-in-out delay-100'
      href={link}
    >
      {name}
    </Link>
  );
};

export default NavItem;
