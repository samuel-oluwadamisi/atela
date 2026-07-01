import { API } from "@/shared/lib/api/axios"
import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";

type TenantProfilePayload = {
    tenantId: string;
    tenantName: string;
    teamSize: number;
}
type ProfilePayload = ApiEnvelope<{
    userId: string;
    email: string;
    role: string;
    tenant: TenantProfilePayload;
}>

export async function getUser(){
    const { data } = await API.get<ProfilePayload>('auth/profile')
    return data.data 
}