import React from 'react';

import { IHero } from '@/services/firebase';

import HeroDescription from './components/Description';
import HeroHeader from './components/Header';
import HeroLocation from './components/Location';
import HeroPhoto from './components/Photo';
import HeroSocials from './components/Socials';
import HeroSubHeader from './components/SubHeader';

interface Props {
    data?: IHero;
}

const SectionHero: React.FC<Props> = props => {
    const { data } = props;

    return (
        <aside className='relative flex flex-col w-full max-w-full lg:max-w-[300px] border-b md:border-none border-neutral-900'>
            <HeroPhoto />
            <div className='lg:sticky lg:top-[80px]'>
                <HeroHeader headline={data?.headline} />
                <HeroSubHeader title={data?.title} status={data?.status} />
                <HeroLocation location={data?.location} />
                <HeroDescription description={data?.description} />
                <HeroSocials />
            </div>
        </aside>
    );
};

export default SectionHero;
