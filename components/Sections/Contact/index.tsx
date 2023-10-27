// packages
import React, { useState, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// components
import SectionUI from '@/components/UI/SectionUI';
import FormInput from './components/FormInput';
import FormTextarea from './components/FormTextarea';
import FormButton from './components/FormButton';

// utils
import { sendEmail } from '@/services/contact';
import { toastError, toastSuccess } from '@/utils/notifications';

const RATE_LIMIT_MSG =
  "I apologize, but it seems you've exceeded the request rate limit. To maintain system stability, I enforce a limit of one (1) request per minute.";

const Contact: React.FC = () => {
  const [isRateLimited, setIsRateLimited] = useState<boolean>(false);
  const [errorMsg, setErrMsg] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = useCallback(
    async data => {
      // if submissin is still active
      // terminate function
      if (isSubmitting) return;

      // if currently being rate
      // limited, terminate function
      if (isRateLimited) return;

      // these are honey pot fields
      // humans can't normally see these
      // except when checking source code
      // if any of these are filled out
      // it's most likely a bot
      if (!!data.hidden1 || !!data.hidden2 || !!data.hidden3) return;

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
          reset();
          break;
        case 429:
          toastError(response.data.message);
          setErrMsg(RATE_LIMIT_MSG);
          setIsRateLimited(true);
          break;
        default:
          toastError('An error occured! Please try again later.');
          setErrMsg('');
          reset();
          break;
      }
    },
    [isSubmitting, isRateLimited, reset],
  );

  // will enable submit button and
  // clear errMsg after one
  // (1) minute of being rate limited
  useEffect(() => {
    let rateLimitTimer: ReturnType<typeof setTimeout>;

    if (isRateLimited) {
      rateLimitTimer = setTimeout(() => {
        setIsRateLimited(false);
        setErrMsg('');
      }, 60000); // 1 minute
    }

    // set up clean up function
    // to avoid memory leaks
    return () => clearTimeout(rateLimitTimer);
  }, [isRateLimited]);

  return (
    <SectionUI headline='Contact'>
      <div className='w-full min-h-[calc(100vh-84px)]'>
        <p className='mb-4 text-neutral-300 select-none'>
          Got a question, or just want to say hello? Hit me up! Have a proposal
          or project in mind? Let&apos;s collaborate!
        </p>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' {...register('hidden1')} />
          <input type='hidden' {...register('hidden2')} />
          <FormInput
            id='name'
            label='Name *'
            type='text'
            isInvalid={!!errors?.name}
            errMsg={errors.name?.message}
            register={register('name', {
              required: 'Please provide your name',
            })}
          />
          <FormInput
            id='email'
            label='Email *'
            type='email'
            isInvalid={!!errors?.email}
            errMsg={errors.email?.message}
            register={register('email', {
              required: 'Please provide your valid email',
            })}
          />
          <FormTextarea
            id='message'
            label='Message *'
            isInvalid={!!errors?.message}
            errMsg={errors.message?.message}
            register={register('message', {
              required: 'Please provide your message',
            })}
          />
          <FormButton
            isSubmitting={isSubmitting}
            isRateLimited={isRateLimited}
            errMsg={errorMsg}
          />
        </form>
      </div>
    </SectionUI>
  );
};

export default Contact;
