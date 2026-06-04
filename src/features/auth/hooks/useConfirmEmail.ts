import { useCallback, useState } from 'react'

interface ConfirmState {
  isError: boolean
  isPending: boolean
  isSuccess: boolean
  error?: string
  mutate: (otp: string) => void
  reset: () => void
}

export function useConfirmEmail(): ConfirmState {
  const [isError, setIsError] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const reset = useCallback(() => {
    setIsError(false)
    setIsPending(false)
    setIsSuccess(false)
    setError(undefined)
  }, [])

  const mutate = useCallback((otp: string) => {
    setIsPending(true)
    setIsError(false)
    setIsSuccess(false)
    setError(undefined)

    window.setTimeout(() => {
      const isValid = /^\d{6}$/.test(otp)

      setIsPending(false)

      if (!isValid) {
        setIsError(true)
        setError('Invalid code, please try again.')
        return
      }

      setIsSuccess(true)
    }, 600)
  }, [])

  return { isError, isPending, isSuccess, error, mutate, reset }
}
