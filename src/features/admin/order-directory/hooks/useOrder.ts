import { useMutation, } from "@tanstack/react-query";
import {toast} from 'react-toastify'
import { getErrorMessage } from "@/shared/lib/api/apiErrorHelper";
import { createOrder, CreateOrderPayload } from "../api/order.api";

export function useCreateOrder(){
    return useMutation({
        mutationFn: (payload: CreateOrderPayload)=>  createOrder(payload),
        onSuccess: (data)=>{
            toast.success(data.message)
        },
        onError: (error)=>{
            toast.error(getErrorMessage(error))
        }
    })
}