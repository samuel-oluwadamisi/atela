import React from 'react'
import { useResendOtp } from '../hooks/useAuth'
import { toast } from 'react-toastify'

type Props = {
    email: string
}
const ResendOtpComponent = ({email}: Props) => {

    const {mutate, isPending} = useResendOtp()

  return (
            <button
              onClick={ ()=> mutate({email})} type='button'
              className="text-xs mt-3 font-bold text-[#6E5F54] hover:underline"
            >
              Didn&apos;t receive it?{" "}
              <span className="text-sm text-[#C1785A] font-medium">
                {isPending? 'loading' : 'Resend Code'}
              </span>
            </button>
  )
}

export default ResendOtpComponent