import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
    return <section className='relative w-full'>{children}</section>;
};

export default Content;
