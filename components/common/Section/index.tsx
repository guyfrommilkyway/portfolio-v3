import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    headline?: string;
}

const Section: React.FC<Props> = ({ headline, children }) => {
    return (
        <section className='relative w-full mb-8'>
            {headline && <h1 className='mb-2 text-white text-lg font-semibold select-none'>{headline}</h1>}
            {children}
        </section>
    );
};

export default Section;
