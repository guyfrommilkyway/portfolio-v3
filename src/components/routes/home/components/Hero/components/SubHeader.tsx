import React from 'react';

interface Props {
    title?: string;
}

const HeroSubHeader: React.FC<Props> = ({ title }) => {
    return <h2 className='flex items-center mb-1 text-neutral-300 font-semibold select-none'>{title} &nbsp;</h2>;
};

export default HeroSubHeader;
