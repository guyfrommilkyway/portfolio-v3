// packages
import React from 'react';

// components
import NavItem from './components/NavItem';

// data
const nav = [
  { name: 'Experience', link: '/' },
  { name: 'Initiatives', link: '/initiatives' },
];

const Navbar: React.FC = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-4 mb-8 lg:mb-0'>
      {nav.map(item => {
        return <NavItem key={item.name} {...item} />;
      })}
    </nav>
  );
};

export default Navbar;
