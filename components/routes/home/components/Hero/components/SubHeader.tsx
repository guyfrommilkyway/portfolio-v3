import React from 'react';

interface Props {
    title?: string;
    status?: string;
}

const HeroSubHeader: React.FC<Props> = ({ title, status }) => {
    return (
        <h2 className='flex items-center mb-2 text-neutral-300 font-semibold select-none'>
            {title} &nbsp;
            {status && <span className='p-1 text-xs text-green-500 border border-green-500 rounded-sm'>{status}</span>}
        </h2>
    );
};

export default HeroSubHeader;
