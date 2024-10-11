import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
    return (
        <main
            className='relative flex flex-col lg:flex-row gap-8 w-full max-w-[920px] mx-auto p-2 md:p-4 lg:p-8 transition-opacity ease-in-out delay-150 border-l border-r border-neutral-900'
            style={{ minHeight: 'calc(100vh - 157px)' }}
        >
            {children}
        </main>
    );
};

export default MainContainer;
