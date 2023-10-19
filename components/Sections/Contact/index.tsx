// packages
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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
  const [errorMsg, setErrMsg] = useState<string>('');

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

    // these are honey pot fields
    // humans can't normally see these
    // except when checking source code
    // if any of these are filled out
    // it's most likely a bot
    if (!!data.hidden1 || !!data.hidden2 || !!data.hidden3) {
      toastError('Bot detected!');
      return;
    }

    // delete honey pot fields
    // before submitting to API
    delete data.hidden1;
    delete data.hidden2;
    delete data.hidden3;

    const response = await sendEmail(data);

    switch (response.status) {
      case 200:
        toastSuccess('Your message has been sent successfully.');
        setErrMsg('');
        break;
      case 429:
        toastError(response.data.message);
        setErrMsg(
          "I apologize, but it seems you've exceeded the request rate limit. To maintain system stability, I enforce a limit of one (1) request per minute.",
        );
        break;
      default:
        toastError('An error occured! Please try again later.');
        setErrMsg('');
        break;
    }

    reset();
  };

  return (
    <SectionUI headline='Contact'>
      <div className='w-full min-h-[calc(100vh-84px)]'>
        <p className='mb-4 text-neutral-300'>
          Got a question, or just want to say hello? Hit me up! Have a proposal
          or project in mind? Let&apos;s collaborate!
        </p>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2 mb-4'>
            <input type='hidden' {...register('hidden1')} />
            <label className='text-neutral-300 select-none'>Name *</label>
            <input
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              type='text'
              {...register('name', {
                required: 'Please provide your name',
              })}
            />
            {!!errors.name && (
              <FormErrorMessage message={errors.name.message} />
            )}
          </div>
          <input type='hidden' {...register('hidden2')} />
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-neutral-300 select-none'>Email *</label>
            <input
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              type='email'
              {...register('email', {
                required: 'Please provide a valid email',
              })}
            />
            {!!errors.email && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </div>
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-neutral-300 select-none'>Message *</label>
            <textarea
              className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
              rows={4}
              {...register('message', {
                required: 'Please provide a message',
              })}
            ></textarea>
            {!!errors.message && (
              <FormErrorMessage message={errors.message.message} />
            )}
            <input type='hidden' {...register('hidden3')} />
          </div>
          <div className='flex flex-wrap items-start gap-x-4 gap-y-8'>
            <button
              className={`flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 font-medium rounded-md select-none transition-all ease-in-out delay-100 ${
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
            {errorMsg && <FormErrorMessage message={errorMsg} />}
          </div>
        </form>
      </div>
    </SectionUI>
  );
};

export default Contact;
