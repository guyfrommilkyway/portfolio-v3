import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface Props {
    company: string;
    link: string;
}

const CardSubHeader: React.FC<Props> = ({ company, link }) => {
    return (
        <h3 className='inline-block w-fit text-sm text-neutral-400 font-medium tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
            {link ? (
                <a className='w-fit select-none' href={link} target='_blank' rel='noopener noreferrer'>
                    {company} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={8} />
                </a>
            ) : (
                <span>{company}</span>
            )}
        </h3>
    );
};

export default CardSubHeader;
