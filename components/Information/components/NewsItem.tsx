// packages
import React from 'react';

const NewsItem: React.FC<NewsItemProps> = props => {
  const { tag, description } = props;

  return (
    <div className='px-4 py-1 transition-colors ease-in delay-150 hover:bg-neutral-900 cursor-pointer'>
      <h2 className='text-neutral-400 text-xs leading-relaxed tracking-tighter uppercase select-none'>
        {tag}
      </h2>
      <p className='text-neutral-300 leading-tight select-none'>
        {description}
      </p>
    </div>
  );
};

export default NewsItem;
