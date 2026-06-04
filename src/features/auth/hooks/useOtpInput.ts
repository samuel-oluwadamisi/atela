import { useCallback, useRef } from 'react'
import type { ClipboardEvent, KeyboardEvent, FormEvent } from 'react'

interface UseOtpInputProps {
  length?: number
  onComplete?: (otp: string) => void
}

export function useOtpInput({ length = 6, onComplete }: UseOtpInputProps = {}) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const focusAt = useCallback(
    (index: number) => {
      inputsRef.current[Math.max(0, Math.min(index, length - 1))]?.focus()
    },
    [length],
  )

  const getOtp = () => inputsRef.current.map((element) => element?.value ?? '').join('')

  const handlePaste = useCallback(
    (event: ClipboardEvent<HTMLDivElement>) => {
      event.preventDefault()

      const digits = event.clipboardData
        .getData('text')
        .replace(/\D/g, '')
        .slice(0, length)

      digits.split('').forEach((digit, index) => {
        if (inputsRef.current[index]) inputsRef.current[index]!.value = digit
      })

      focusAt(digits.length - 1)

      if (digits.length === length) onComplete?.(getOtp())
    },
    [length, onComplete, focusAt],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (event.key === 'Backspace') {
        event.preventDefault()
        if (inputsRef.current[index]?.value) {
          inputsRef.current[index]!.value = ''
        } else {
          focusAt(index - 1)
        }
      }

      if (event.key === 'ArrowLeft') focusAt(index - 1)
      if (event.key === 'ArrowRight') focusAt(index + 1)
    },
    [focusAt],
  )

  const handleInput = useCallback(
    (event: FormEvent<HTMLInputElement>, index: number) => {
      const value = event.currentTarget.value.replace(/\D/g, '')
      event.currentTarget.value = value.slice(-1)

      if (value) focusAt(index + 1)

      const otp = getOtp()
      if (otp.length === length) onComplete?.(otp)
    },
    [length, onComplete, focusAt],
  )

  return { inputsRef, handlePaste, handleKeyDown, handleInput }
}
