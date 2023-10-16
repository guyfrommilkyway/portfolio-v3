// packages
import React from 'react';

const NewsCard: React.FC<NewsCardProps> = props => {
  const { tag, description } = props;

  return (
    <div className='px-4 py-1 transition-colors ease-in delay-100 hover:bg-neutral-800 cursor-pointer'>
      <h2 className='text-neutral-400 leading-snug tracking-tighter'>{tag}</h2>
      <p className='text-white'>{description}</p>
    </div>
  );
};

export default NewsCard;
