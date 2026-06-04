import { OtpInput } from './OtpInput'
import { useConfirmEmail } from '../hooks/useConfirmEmail'

export function ConfirmEmailForm() {
  const mutation = useConfirmEmail()

  return (
    <div className="flex flex-col items-center gap-5">
      <OtpInput
        onComplete={(otp) => mutation.mutate(otp)}
        isError={mutation.isError}
      />

      {mutation.isError && (
        <p className="text-sm text-[#C0614A]">
          Invalid code, please try again.
        </p>
      )}
    </div>
  )
}
