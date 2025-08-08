import Image from 'next/image';

import Section from '@/components/common/Section';

const ThinkDifferent: React.FC = () => {
  return (
    <Section headline='A Tribute to the Visionaries' subtitle="From Apple's 1997 'Think Different' compaign">
      <div className='relative my-4'>
        <Image
          className='aspect-auto'
          layout='responsive'
          width={240}
          height={320}
          src='/images/think-different-apple-1997.jpg'
          alt='think-different-by-apple'
        />
      </div>
      <div className='max-w-prose mx-auto space-y-4'>
        <p className='text-neutral-400 text-sm leading-relaxed italic'>
          Here&apos;s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones
          who see things differently.
        </p>
        <p className='text-neutral-400 text-sm leading-relaxed italic'>
          They&apos;re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,
          glorify or vilify them. About the only thing you can&apos;t do is ignore them. Because they change things. They push the
          human race forward.
        </p>
        <p className='text-neutral-400 text-sm leading-relaxed italic'>
          And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can
          change the world, are the ones who do.
        </p>
      </div>
    </Section>
  );
};

export default ThinkDifferent;
