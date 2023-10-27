// packages
import React from 'react';

const Pill: React.FC<PillProps> = props => {
  const { tech } = props;

  return (
    <span className='px-2 py-1 text-neutral-300 text-sm font-medium select-none bg-neutral-900 rounded-md cursor-pointer'>
      {tech}
    </span>
  );
};

export default Pill;
