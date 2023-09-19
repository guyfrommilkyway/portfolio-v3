// packages below
import React from 'react';

const LeftContent: React.FC = () => {
  return (
    <div className='lg:sticky lg:top-32 w-full h-[240px] max-h-screen'>
      <h1 className='mb-2 font-bold text-4xl leading-tight'>Almer Tampus</h1>
      <p className='mb-4 text-lg'>Agile Web Developer</p>
      <p className='w-full lg:max-w-[420px] text-md'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare nisl mauris, rutrum
        pharetra libero tempus quis. Suspendisse fringilla, justo id commodo pharetra, velit dolor
        elementum lacus, a imperdiet tellus magna nec orci.
      </p>
    </div>
  );
};

export default LeftContent;
