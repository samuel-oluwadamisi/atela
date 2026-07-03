import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";
import { API } from "@/shared/lib/api/axios";



export type SignupPayload = {
    factoryName: string;
    email: string;
    password: string;
    confirmPassword: string;
    teamSize: number;
    currency: string
}

export type SignupResponse = {
    message: string
}


export type VerifyEmailPayload = {
    email: string;
    code: string
}

export type ResendOtp ={
    email: string
}

export type LoginType = {
    email: string;
    password: string
}

export type LoginResponse = ApiEnvelope<{
    accessToken: string;
    message: string;
}>
export async function signup (payload: SignupPayload){
    const {data} = await API.post('/auth/register-workspace', payload)
    return data
}

export async function verifyEmail(payload:VerifyEmailPayload){
    const {data} = await API.post('/auth/verify-email', payload)
    return data 
}

export async function resendOtp(payload: ResendOtp){
    const {data} = await API.post('auth/resend-otp', payload)
    return data 
}
  
export async function login(payload:LoginType){
    const {data} = await API.post<LoginResponse>('/auth/login', payload)
    return data.data
}