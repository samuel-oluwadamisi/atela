import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStaff, CreateStaffPayload } from "../api/team.api";
import { getErrorMessage } from "@/shared/lib/api/apiErrorHelper";
import { toast } from "react-toastify";


export function  useCreateStaff(){
    return useMutation({
        mutationFn: (payload: CreateStaffPayload)=> createStaff(payload) , 
        onSuccess: (data)=>{
            toast.success(data.message)
        //  queryClient.invalidateQueries({ queryKey: ['profile'] });
        },
        onError: (error)=>{
            toast.error(getErrorMessage(error))
        }
    })
}