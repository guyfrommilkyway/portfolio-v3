import React from 'react';

interface Props {
    description?: string;
}

const HeroDescription: React.FC<Props> = ({ description }) => {
    return (
        <p className='w-full mb-4 p-3 text-sm text-neutral-400 leading-snug bg-neutral-900 rounded-sm select-none'>
            {description}
        </p>
    );
};

export default HeroDescription;
