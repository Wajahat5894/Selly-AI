'use client'
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const ButtonHandler = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook()
  const { formState, getFieldState, getValues } = useFormContext()
  const { onGenerateOTP } = useSignUpForm()

  const { isDirty: isName } = getFieldState('fullname', formState)
  const { isDirty: isEmail } = getFieldState('email', formState)
  const { isDirty: isPassword } = getFieldState('password', formState)

  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
        >
          Create an account
        </Button>
        <p>
          Already have an account?
          <Link
            href="/auth/sign-in"
            className="font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="button"
          className="w-full"
          onClick={() => {
            if (isName && isEmail && isPassword) {
              onGenerateOTP(
                getValues('email'),
                getValues('password'),
                setCurrentStep
              ).catch(error => {
                console.error('Error in onGenerateOTP:', error);
                // Handle error here, maybe show a toast
              });
            } else {
              // Show an error message if fields are not filled
              console.error('Please fill all required fields');
              // You can add a toast here to show the error to the user
            }
          }}
        >
          Continue
        </Button>
        <p>
          Already have an account?{' '}
          <Link
            href="/auth/sign-in"
            className="font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Button
        type="submit"
        className="w-full"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
      >
        Continue
      </Button>
      <p>
        Already have an account?{' '}
        <Link
          href="/auth/sign-in"
          className="font-bold"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}

export default ButtonHandler
