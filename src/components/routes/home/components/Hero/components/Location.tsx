import React from 'react';

interface Props {
    location?: string;
}

const HeroLocation: React.FC<Props> = ({ location }) => {
    return <p className='w-full max-w-sm mb-2 text-neutral-400 leading-snug select-none'>{location}</p>;
};

export default HeroLocation;
