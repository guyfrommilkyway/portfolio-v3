import React from 'react';
import { FaArrowUpRightFromSquare, FaUserGroup, FaDiagramProject, FaEnvelope, FaLocationPin } from 'react-icons/fa6';

import Section from '@/components/common/Section';

import { IRepo, IUser } from '@/services/github';

import formatDate from '@/utils/formatDate';

interface Props {
    user: IUser | null;
    data: IRepo;
}

const SectionGitHub: React.FC<Props> = props => {
    const { user, data } = props;

    console.log(user);

    return (
        <Section>
            <div className='mb-4'>
                <h2 className='mb-2 text-lg text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                    GitHub
                </h2>
                <h2 className='mb-2 text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                    <a className='inline-block w-fit select-none' href={user?.html_url} target='_blank' rel='noopener noreferrer'>
                        {user?.name} (@{user?.login})
                    </a>
                </h2>
                {user?.bio && (
                    <p className='mb-4 p-3 text-sm text-neutral-400 italic font-medium bg-neutral-900 rounded-sm select-none'>
                        {user?.bio}
                    </p>
                )}
                <div className='flex items-center gap-2 mb-2'>
                    <FaUserGroup size={16} color='#a3a3a3' />
                    <p className='inline-block text-sm text-neutral-400'>
                        {' '}
                        <span className='text-white'>{user?.followers}</span> followers &#x2022;&nbsp;
                        <span className='text-white'>{user?.following}</span> following
                    </p>
                </div>
                {user?.location && (
                    <div className='flex items-center gap-2 mb-2'>
                        <FaLocationPin size={16} color='#a3a3a3' />
                        <p className='text-sm text-neutral-400 font-medium select-none'>{user?.location}</p>
                    </div>
                )}
                {user?.email && (
                    <div className='flex items-center gap-2 mb-2'>
                        <FaEnvelope size={16} color='#a3a3a3' />
                        <p className='text-sm text-neutral-400 font-medium select-none'>{user?.email}</p>
                    </div>
                )}
                <div className='flex items-center gap-2 mb-2'>
                    <FaDiagramProject size={16} color='#a3a3a3' />
                    <p className='inline-block text-sm text-neutral-400'>
                        {' '}
                        <span className='text-white'>{user?.public_repos}</span> public repositories
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-2 max-h-[420px] overflow-y-scroll overflow-x-hidden border border-neutral-900 rounded-sm'>
                {data.map(item => (
                    <div key={item?.id} className='w-full p-4 border-b border-neutral-900 select-none'>
                        <h2 className='inline-block w-fit mb-2 text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                            <a className='w-fit select-none' href={item?.html_url} target='_blank' rel='noopener noreferrer'>
                                {item?.name} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={10} />
                            </a>
                            {item?.fork && (
                                <span className='ml-2 p-1 text-xs text-teal-100 font-semibold bg-teal-800 rounded-sm'>
                                    Forked
                                </span>
                            )}
                            {item?.archived && (
                                <span className='ml-2 p-1 text-xs text-orange-100 font-semibold bg-orange-800 rounded-sm'>
                                    Archived
                                </span>
                            )}
                        </h2>
                        {item?.homepage && (
                            <h3 className='w-fit mb-2 text-xs text-neutral-400 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                                <a href={item?.homepage} target='_blank' rel='noopener noreferrer'>
                                    {item?.homepage} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={8} />
                                </a>
                            </h3>
                        )}
                        {item?.description && (
                            <p className='mb-2 text-sm text-neutral-400 font-medium select-none'>{item?.description}</p>
                        )}
                        {item?.topics && (
                            <div className='flex flex-wrap gap-1 mb-2'>
                                {item?.topics.map((item: string) => (
                                    <span
                                        key={item}
                                        className='p-1 text-xs text-neutral-300 bg-neutral-900 select-none rounded-sm'
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className='text-xs text-neutral-400'>Updated on {item?.pushed_at && formatDate(item?.pushed_at)}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default SectionGitHub;
