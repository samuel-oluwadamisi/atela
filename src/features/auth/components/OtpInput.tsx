import { useOtpInput } from '../hooks/useOtpInput'

interface OtpInputProps {
  length?: number
  onComplete: (otp: string) => void
  isError?: boolean
}

export function OtpInput({ length = 6, onComplete, isError = false }: OtpInputProps) {
  const { inputsRef, handlePaste, handleKeyDown, handleInput } = useOtpInput({
    length,
    onComplete,
  })

  return (
    <div className="flex gap-2.5" onPaste={handlePaste}>
      {[...Array(length)].map((_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputsRef.current[index] = element
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          onKeyDown={(event) => handleKeyDown(event, index)}
          onInput={(event) => handleInput(event, index)}
          className={[
            'w-12 h-13 text-center text-xl font-medium rounded-xl',
            'bg-[#EDE8E3] text-[#3D2C22] caret-[#C49A82]',
            'border-none outline-none transition-all',
            'focus:bg-[#E4DDD6] focus:ring-2 focus:ring-[#C49A82]',
            isError ? 'ring-2 ring-[#C0614A]' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      ))}
    </div>
  )
}
