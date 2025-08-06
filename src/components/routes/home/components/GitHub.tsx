import React from 'react';
import { FaArrowUpRightFromSquare, FaDiagramProject, FaUserGroup } from 'react-icons/fa6';

import Section from '@/components/common/Section';

import { IRepo, IUser } from '@/services/github';

import { formatDate } from '@/utils/common';

interface Props {
  user: IUser;
  data: IRepo;
}

const Github: React.FC<Props> = props => {
  const { user, data } = props;

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
        <div className='flex items-center gap-2 mb-2'>
          <FaUserGroup size={16} color='#a3a3a3' />
          <p className='inline-block text-sm text-neutral-400'>
            <span className='text-white'>{user?.followers}</span> followers <span className='text-white'>{user?.following}</span>{' '}
            following
          </p>
        </div>
        <div className='flex items-center gap-2 mb-2'>
          <FaDiagramProject size={16} color='#a3a3a3' />
          <p className='inline-block text-sm text-neutral-400'>
            {' '}
            <span className='text-white'>{user?.public_repos}</span> public repositories
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2 max-h-[380px] min-h-[380px] items-center overflow-y-scroll overflow-x-hidden'>
        {data.map(item => (
          <div key={item?.id} className='w-full pb-4 select-none'>
            <h2 className='inline-block w-fit mb-2 text-neutral-300 font-semibold tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
              <a className='w-fit select-none' href={item?.html_url} target='_blank' rel='noopener noreferrer'>
                {item?.name} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={10} />
              </a>
              {(item?.fork || item?.archived) && (
                <span
                  className={`ml-2 p-1 text-xs text-teal-100 font-semibold ${item.fork && 'bg-teal-800'} ${item.archived && 'bg-orange-800'} rounded-sm`}
                >
                  {item.fork && !item.archived && 'Forked'}
                  {!item.fork && item.archived && 'Archived'}
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
            {item?.description && <p className='mb-2 text-sm text-neutral-400 font-medium select-none'>{item?.description}</p>}
            {item?.topics && (
              <div className='flex flex-wrap gap-1 mb-2'>
                {item?.topics.map((item: string) => (
                  <span key={item} className='p-1 text-xs text-neutral-300 bg-neutral-900 select-none rounded-sm'>
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

export default Github;
