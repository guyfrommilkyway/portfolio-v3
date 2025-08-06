import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import Section from '@/components/common/Section';

import { IWork } from '@/services/firebase';

interface Props {
  data?: {
    [key: string]: IWork;
  };
}

const Work: React.FC<Props> = props => {
  const { data } = props;

  return (
    <Section headline='Work'>
      <div className='flex flex-col'>
        {!!data &&
          Object.keys(data)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .reverse()
            .map(item => {
              const { company, duration, link, location, title } = data[item];
              return (
                <div key={company} className={`relative flex flex-col px-4 py-2 border-l border-neutral-700`}>
                  <div className={`absolute top-3 -left-1 w-2 h-2 bg-neutral-700 rounded-full`} />
                  <div className='flex flex-col lg:flex-row justify-between align-items'>
                    <h2 className='text-neutral-300 font-semibold '>{title}</h2>
                    <span className='text-sm text-neutral-400 italic'>{duration}</span>
                  </div>
                  <h3 className='inline-block w-fit text-sm text-neutral-400 font-medium tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
                    {link ? (
                      <a className='w-fit select-none' href={link} target='_blank' rel='noopener noreferrer'>
                        {company} <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={8} />
                      </a>
                    ) : (
                      <span>{company}</span>
                    )}
                  </h3>
                  <p className='text-sm text-neutral-400'>{location}</p>
                </div>
              );
            })}
      </div>
    </Section>
  );
};

export default Work;
