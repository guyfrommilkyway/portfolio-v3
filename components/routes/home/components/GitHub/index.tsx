import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import Section from '@/components/common/Section';

import formatDate from '@/utils/formatDate';

interface Props {
    data?: any[];
}

const SectionGitHub: React.FC<Props> = props => {
    const { data } = props;

    return (
        <Section headline='GitHub Repositories'>
            <div className='flex flex-col gap-2 max-h-[420px] overflow-y-scroll overflow-x-hidden border border-neutral-900'>
                {data
                    ?.sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at))
                    .map(item => (
                        <div key={item.id} className='w-full p-4 border-b border-neutral-900 select-none'>
                            <h2 className='inline-block w-fit mb-2 text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                                <a className='w-fit select-none' href={item.html_url} target='_blank' rel='noopener noreferrer'>
                                    {item.name} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={10} />
                                </a>
                                {item.archived && (
                                    <span className='ml-2 p-1 text-xs text-orange-500 font-semibold border border-orange-500 rounded-md'>
                                        Public archive
                                    </span>
                                )}
                            </h2>
                            <p className='mb-2 text-sm text-neutral-400 font-medium select-none'>{item.description}</p>
                            <div className='flex flex-wrap gap-1 mb-2'>
                                {item.topics.map((item: string) => (
                                    <span
                                        key={item}
                                        className='p-1 text-xs text-neutral-300 bg-neutral-900 select-none rounded-md'
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p className='text-xs text-neutral-400'>Updated on {formatDate(item.updated_at)}</p>
                        </div>
                    ))}
            </div>
        </Section>
    );
};

export default SectionGitHub;
