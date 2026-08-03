import { staffMembers } from "@/mock/staff";
import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";
import { API } from "@/shared/lib/api/axios";
import { isDemoMode } from "@/shared/lib/demo/demo";


export type CreateStaffPayload = {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
}

type CreateStaffResponse = ApiEnvelope<{
    id: string;
    tenantId: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createAt: string;
}>

export type Staff = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    paymentType: string;
}

type GetStaffResponse =ApiEnvelope<Staff[]>
type GetStaffByIdResponse = ApiEnvelope<Staff>

export async function createStaff(payload: CreateStaffPayload){
    const {data} = await API.post<CreateStaffResponse>('/staff', payload)
    return data
}

export async function getStaff(){
    if (isDemoMode) {
        return staffMembers
    }
    const { data } = await API.get<GetStaffResponse>('/staff')
    return data.data
}

export async function getStaffById(id:string){
    const { data } = await API.get<GetStaffByIdResponse>(`staff/${id}`)
    return data 
}