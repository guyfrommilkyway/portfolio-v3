import React from 'react';

interface Props {
    title: string;
}

const HeroSubHeader: React.FC<Props> = ({ title }) => {
    return <h2 className='mb-2 text-neutral-300 font-semibold select-none'>{title}</h2>;
};

export default HeroSubHeader;
