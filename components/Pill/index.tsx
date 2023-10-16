// packages
import React from 'react';

const Pill: React.FC<PillProps> = props => {
  const { tech } = props;

  return (
    <span className='px-2 py-1 text-neutral-300 select-none hover:text-white bg-neutral-700 transition ease-in-out delay-100 rounded-sm cursor-pointer'>
      {tech}
    </span>
  );
};

export default Pill;
