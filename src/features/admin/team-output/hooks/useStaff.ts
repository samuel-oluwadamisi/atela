import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createStaff, CreateStaffPayload, getStaff, getStaffById } from "../api/team.api";
import { getErrorMessage } from "@/shared/lib/api/apiErrorHelper";
import { toast } from "react-toastify";


export function  useCreateStaff(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (payload: CreateStaffPayload)=> createStaff(payload) , 
        onSuccess: (data)=>{
            toast.success(data.message)
         queryClient.invalidateQueries({ queryKey: ['staff'] });
        },
        onError: (error)=>{
            toast.error(getErrorMessage(error))
        }
    })
}

export function useGetStaff(){
    return useQuery({
        queryKey: ['staff'],
        queryFn: getStaff,
        staleTime: 60 * 1000,
    })
}

export function useGetStaffById(id:string){
    return useQuery({
        queryKey: ['staffById', id],
        queryFn: ()=> getStaffById(id),
    })
}