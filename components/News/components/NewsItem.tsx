// packages
import React from 'react';

const NewsItem: React.FC<NewsItemProps> = props => {
  const { tag, description } = props;

  return (
    <div className='px-4 py-1 transition-colors ease-in delay-100 hover:bg-neutral-800 cursor-pointer'>
      <h2 className='text-neutral-400 leading-snug tracking-tighter select-none'>
        {tag}
      </h2>
      <p className='text-neutral-300 select-none'>{description}</p>
    </div>
  );
};

export default NewsItem;
