import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signup,  verifyEmail, resendOtp, login, } from "../api/auth.api";
import { SignupPayload, VerifyEmailPayload, ResendOtp, LoginType } from "../api/auth.api";
import {toast} from 'react-toastify'
import { getErrorMessage } from "@/shared/lib/api/apiErrorHelper";


export function useSignup(){
    return useMutation({
        mutationFn: (payload:SignupPayload) => signup(payload),
        onSuccess: (data)=> {
            toast.success(data.data.message)
        },
        onError: (error) => {
           toast.error(getErrorMessage(error))
    }
    })
}


export function useVerifyEmail(){
     const router = useRouter();
    //  const queryClient = useQueryClient()
    return useMutation({
       
        mutationFn: (payload: VerifyEmailPayload)=> verifyEmail(payload),
        onSuccess: ()=>{
             // queryClient.invalidateQueries({ queryKey: ['me'] });
            router.push('/dashboard')
        }
    })
}

export function useResendOtp(){
    return useMutation({
        mutationFn: (payload: ResendOtp)=> resendOtp(payload)
    })
}


export function useLogin(){
    const router = useRouter()
    // const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (payload: LoginType)=> login(payload),
        onSuccess: (data)=> {
            localStorage.setItem('access_token', data.data.access_token)
            toast.success(data.data.message)
            // queryClient.invalidateQueries({ queryKey: ['me'] });
            router.push('/dashboard')
        },
        onError: (error) => {
           toast.error(getErrorMessage(error))
    }
    })
}