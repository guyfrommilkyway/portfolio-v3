import React from 'react';

import { IExperience } from '@/services/firebase';

import CardDuration from './CardDuration';
import CardHeader from './CardHeader';
import CardLocation from './CardLocation';
import CardSubHeader from './CardSubHeader';

const ExperienceCard: React.FC<IExperience> = ({ company, duration, link, location, title, setup }) => {
    const CardHeaderProps = { title };
    const CardSubHeaderProps = { link, company };
    const CardDurationProps = { duration, setup };
    const CardLocationProps = { location };

    return (
        <div className='flex flex-col'>
            <CardHeader {...CardHeaderProps} />
            <CardSubHeader {...CardSubHeaderProps} />
            <CardDuration {...CardDurationProps} />
            <CardLocation {...CardLocationProps} />
        </div>
    );
};

export default ExperienceCard;
