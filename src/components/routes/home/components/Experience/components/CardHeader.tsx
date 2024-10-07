import React from 'react';

interface Props {
    title: string;
}

const CardHeader: React.FC<Props> = ({ title }) => {
    return (
        <h2 className='text-neutral-300 font-semibold select-none'>
            <span>{title}</span>
        </h2>
    );
};

export default CardHeader;
