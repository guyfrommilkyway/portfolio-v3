import Image from 'next/image';
import React from 'react';
import { FaLocationPin } from 'react-icons/fa6';

import SOCIALS from '@/constants/socials';

import { IHero } from '@/services/firebase';
import { IUser } from '@/services/github';

interface Props {
    user: IUser | null;
    data?: IHero;
}

const SectionHero: React.FC<Props> = props => {
    const { user, data } = props;

    return (
        <aside className='relative flex flex-col w-full max-w-full lg:max-w-[380px] border-b md:border-none border-neutral-900'>
            <div className='mb-10 select-none'>
                <div className='relative w-full rounded-sm overflow-hidden transition-all ease-in-out delay-100 cursor-pointer select-none hover:z-30 hover:opacity-100'>
                    <Image
                        className='aspect-auto'
                        layout='responsive'
                        width={240}
                        height={320}
                        src='/images/almer-tampus-3.jpg'
                        alt='almer tampus'
                        placeholder='blur'
                        blurDataURL='/images/almer-tampus-3.jpg'
                    />
                </div>
            </div>
            <div className='lg:sticky lg:top-[80px]'>
                <h1 className='mb-2 text-white font-bold text-xl leading-none tracking-wider select-none'>{data?.headline}</h1>
                <h2 className='flex items-center mb-2 text-neutral-400 font-semibold text-lg select-none'>
                    {data?.title} &nbsp;
                </h2>
                https://ph.pinterest.com/guyfrommilkyway/
                {user?.bio && (
                    <p className='mb-4 p-3 text-sm text-neutral-400 italic font-medium bg-neutral-900 rounded-sm select-none'>
                        {user?.bio}
                    </p>
                )}
                {user?.location && (
                    <div className='flex items-center gap-2 mb-4'>
                        <FaLocationPin size={16} color='#a3a3a3' />
                        <p className='text-sm text-neutral-400 font-medium select-none'>{user?.location}</p>
                    </div>
                )}
                <div className='flex gap-2 mb-4'>
                    {SOCIALS?.map(item => {
                        return (
                            <a
                                key={item.name}
                                className='flex items-center gap-2 text-sm text-neutral-400 font-medium leading-none transition-colors ease-in-out delay-100 hover:text-white'
                                href={item.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item.icon}
                                <span className='sr-only'>{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default SectionHero;
