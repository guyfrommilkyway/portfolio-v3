import React from 'react';

interface Props {
    location: string;
}

const CardLocation: React.FC<Props> = ({ location }) => {
    return <p className='text-sm text-neutral-400 select-none'>{location}</p>;
};

export default CardLocation;
