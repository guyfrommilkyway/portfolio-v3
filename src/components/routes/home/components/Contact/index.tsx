import React, { useState, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Section from '@/components/common/Section';

import { sendEmail } from '@/services/contact';

import { toastError, toastSuccess } from '@/utils/notifications';

import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import FormTextarea from './components/FormTextarea';

export interface ContactForm {
    name: Required<string>;
    email: Required<string>;
    message: Required<string>;
    hidden1?: string;
    hidden2?: string;
    hidden3?: string;
}

const SectionContact: React.FC = () => {
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
            if (isSubmitting) return;
            if (isRateLimited) return;
            if (!!data.hidden1 || !!data.hidden2 || !!data.hidden3) return;

            delete data.hidden1;
            delete data.hidden2;
            delete data.hidden3;

            const res = await sendEmail(data);

            switch (res.status) {
                case 200:
                    toastSuccess(res.data.message);
                    setErrMsg('');
                    reset();
                    break;
                case 429:
                    toastError('Rate limit reached!');
                    setErrMsg("Looks like you've hit the rate limit. Try again later.");
                    setIsRateLimited(true);
                    break;
                default:
                    toastError(res.data.message);
                    setErrMsg('');
                    reset();
                    break;
            }
        },
        [isSubmitting, isRateLimited, reset],
    );

    useEffect(() => {
        let rateLimitTimer: ReturnType<typeof setTimeout>;

        if (isRateLimited) {
            rateLimitTimer = setTimeout(() => {
                setIsRateLimited(false);
                setErrMsg('');
            }, 60000); // 1 minute
        }

        // clean up function
        return () => clearTimeout(rateLimitTimer);
    }, [isRateLimited]);

    return (
        <Section headline="Ready to collaborate or connect? Let's chat!">
            <div className='w-full mb-20'>
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
                    <FormButton isSubmitting={isSubmitting} isRateLimited={isRateLimited} errMsg={errorMsg} />
                </form>
            </div>
        </Section>
    );
};

export default SectionContact;
