import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const SideContent: React.FC<Props> = ({ children }) => {
    return <aside className='hidden xl:flex flex-col gap-4 w-full max-w-[320px] h-fit my-4'>{children}</aside>;
};

export default SideContent;
