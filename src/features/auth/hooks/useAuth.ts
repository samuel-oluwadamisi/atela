import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signup,  verifyEmail, resendOtp, login, } from "../api/auth.api";
import { SignupPayload, VerifyEmailPayload, ResendOtp, LoginType } from "../api/auth.api";
import {toast} from 'react-toastify'
import { getErrorMessage } from "@/shared/lib/api/apiErrorHelper";
import { useAuth } from "@/shared/context/AuthContext";


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
     const {login: setAuthToken} = useAuth()
    //  const queryClient = useQueryClient()
    return useMutation({
       
        mutationFn: (payload: VerifyEmailPayload)=> verifyEmail(payload),
        onSuccess: (data)=>{
            setAuthToken(data.data.access_token)
            toast.success(data.data.message)
             // queryClient.invalidateQueries({ queryKey: ['me'] });
            router.push('/dashboard')
        },
        onError: (error)=> {
            toast.error(getErrorMessage(error))

        }
    })
}

export function useResendOtp(){
    return useMutation({
        mutationFn: (payload: ResendOtp)=> resendOtp(payload),
        onSuccess: (data)=>{
            toast.success(data.data.message)
        },
        onError: (error)=>{
            toast.error(getErrorMessage(error))
        }
    })
}


export function useLogin(){
    const router = useRouter()
    const {login: setAuthToken} = useAuth()
    // const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (payload: LoginType)=> login(payload),
        onSuccess: (data)=> {
            setAuthToken(data.data.access_token)
            toast.success(data.data.message)
            // queryClient.invalidateQueries({ queryKey: ['me'] });
            router.push('/dashboard')
        },
        onError: (error) => {
           toast.error(getErrorMessage(error))
    }
    })
}