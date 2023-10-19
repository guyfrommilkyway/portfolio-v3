// packages
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import validator from 'validator';

// components
import SectionUI from '@/components/UI/SectionUI';
import FormErrorMessage from './components/FormErrorMessage';

// utils
import { sendEmail } from '@/services/contact';
import { toastError, toastSuccess } from '@/utils/notifications';

// assets
// asset
import LoadingSVG from '@/assets/svg/rolling.svg';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = async data => {
    // prevent submit spamming
    if (isSubmitting) {
      toastError('Request is still being process.');
      return;
    }

    // if any of these inputs are
    // filled out, it's a bot
    if (!!data.hidden1 || !!data.hidden2 || !!data.hidden3) {
      toastError('Bot detected!');
      return;
    }

    const response = await sendEmail(data);

    if (response.status !== 200) {
      toastError('An error occurred! Please try again later.');
      return;
    }

    reset();
    toastSuccess(
      'Your message has been sent successfully! Thanks for reaching out.',
    );
  };

  return (
    <SectionUI headline='Contact'>
      <div className='min-h-[calc(100vh-84px)]'>
        <p className='mb-4 text-neutral-300'>
          Got a question, or just want to say hello? Hit me up! Have a proposal
          or project in mind? Let&apos;s collaborate!
        </p>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-1 mb-4'>
            <input type='hidden' {...register('hidden1')} />
            <label className='text-neutral-300 select-none'>Name *</label>
            <input
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              type='text'
              {...register('name', {
                required: 'Please enter your name',
              })}
            />
            {!!errors.name && (
              <FormErrorMessage message={errors.name.message} />
            )}
          </div>
          <input type='hidden' {...register('hidden2')} />
          <div className='flex flex-col gap-1 mb-4'>
            <label className='text-neutral-300 select-none'>Email *</label>
            <input
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              type='email'
              {...register('email', {
                required: 'Please enter a valid email',
              })}
            />
            {!!errors.email && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </div>
          <div className='flex flex-col gap-1 mb-4'>
            <label className='text-neutral-300 select-none'>Subject *</label>
            <input
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              type='text'
              {...register('subject', {
                required: 'Please enter a subject',
              })}
            />
            {!!errors.subject && (
              <FormErrorMessage message={errors.subject.message} />
            )}
          </div>
          <div className='flex flex-col gap-1 mb-4'>
            <label className='text-neutral-300 select-none'>Message *</label>
            <textarea
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              rows={4}
              {...register('message', {
                required: 'Please enter your message',
              })}
            ></textarea>
            {!!errors.message && (
              <FormErrorMessage message={errors.message.message} />
            )}
            <input type='hidden' {...register('hidden3')} />
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2  bg-white hover:bg-neutral-200 font-medium rounded-md select-none transition-all ease-in-out delay-100 ${
              isSubmitting
                ? 'text-neutral-400 cursor-not-allowed'
                : 'text-neutral-700 cursor-pointer'
            }`}
            disabled={isSubmitting}
          >
            <span className=''>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </span>
            {isSubmitting && <LoadingSVG width={24} height={24} />}
          </button>
        </form>
      </div>
    </SectionUI>
  );
};

export default Contact;
