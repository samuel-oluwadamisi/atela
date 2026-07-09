import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";
import { API } from "@/shared/lib/api/axios";


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

export async function createStaff(payload: CreateStaffPayload){
    const {data} = await API.post<CreateStaffResponse>('/staff', payload)
    return data
}