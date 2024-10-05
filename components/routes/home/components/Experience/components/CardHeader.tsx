import React from 'react';
// assets
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface Props {
    link: string;
    company: string;
}

const CardHeader: React.FC<Props> = ({ link, company }) => {
    return (
        <h2 className='inline-block w-fit text-sm text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
            {link ? (
                <a className='w-fit select-none' href={link} target='_blank' rel='noopener noreferrer'>
                    {company} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={10} />
                </a>
            ) : (
                <span>{company}</span>
            )}
        </h2>
    );
};

export default CardHeader;
