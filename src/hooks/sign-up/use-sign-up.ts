'use client'
import { useToast } from '@/components/ui/use-toast'
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onCompleteUserRegistration } from '@/actions/auth'

export const useSignUpForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const { signUp, isLoaded, setActive } = useSignUp()
  const router = useRouter()
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: 'owner',
    },
    mode: 'onChange',
  })

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return

    try {
      if (!email || !password) {
        console.error('Email or password is missing');
        toast({
          title: 'Error',
          description: 'Email and password are required',
        });
        return;
      }

      await signUp.create({
        emailAddress: email,
        password: password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      onNext((prev) => prev + 1)
    } catch (error: any) {
      console.error('Error in onGenerateOTP:', error);
      let errorMessage = 'An unknown error occurred';
      if (error.errors && error.errors.length > 0) {
        errorMessage = error.errors[0].message || error.errors[0].longMessage;
      }
      toast({
        title: 'Error',
        description: errorMessage,
      });
    }
  }

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      if (!isLoaded) return

      try {
        setLoading(true)
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        })

        console.log('Clerk response:', completeSignUp);

        if (completeSignUp.status !== 'complete') {
          throw new Error(`Sign up process not completed. Status: ${completeSignUp.status}`);
        }

        if (!signUp.createdUserId) {
          throw new Error('User ID not created');
        }

        const registered = await onCompleteUserRegistration(
          values.fullname,
          signUp.createdUserId,
          values.type
        )

        console.log('Registration response:', registered);

        if (registered?.status === 200 && registered.user) {
          await setActive({
            session: completeSignUp.createdSessionId,
          })

          setLoading(false)
          router.push('/dashboard')
        } else {
          console.error('Registration failed:', registered);
          throw new Error(registered?.error || 'User registration failed');
        }
      } catch (error: any) {
        console.error('Detailed error in onHandleSubmit:', error);
        setLoading(false);
        toast({
          title: 'Error',
          description: error.message || 'An unknown error occurred',
        })
      }
    }
  )
  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  }
}
