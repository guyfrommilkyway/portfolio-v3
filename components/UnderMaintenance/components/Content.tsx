// import packages below
import Image from 'next/image';

const Content = () => {
  return (
    <section className='my-5 text-center'>
      <div className='mb-8'>
        <p className='text-lg text-neutral-800'>
          I'm busy building something cool for you. And I can't wait for you to see it.
        </p>
        <p className='text-lg text-neutral-800'>Please check back soon.</p>
      </div>
      <div className='flex justify-center gap-5'>
        <a href='https://ph.linkedin.com/in/almerflorestampus' target='_blank' rel='no-referrer'>
          <div className='flex items-center gap-2'>
            <Image src='/linkedin.png' width={28} height={28} alt='linkedin' />
            <span className='text-sm text-gray-700'>LinkedIn</span>
          </div>
        </a>
        <a href='https://github.com/guyfrommilkyway' target='_blank' rel='no-referrer'>
          <div className='flex items-center gap-2'>
            <Image src='/github.png' width={28} height={28} alt='github' />
            <span className='text-sm text-gray-700'>GitHub</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Content;