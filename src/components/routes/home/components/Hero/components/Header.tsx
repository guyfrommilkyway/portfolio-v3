import React from 'react';

interface Props {
    headline?: string;
}

const HeroHeader: React.FC<Props> = ({ headline }) => {
    return <h1 className='mb-1 text-white font-bold text-xl leading-none tracking-wider select-none'>{headline}</h1>;
};

export default HeroHeader;
