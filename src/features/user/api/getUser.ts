import { API } from "@/shared/lib/api/axios"
import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";
import { isDemoMode } from "@/shared/lib/demo/demo";
import { demoUser } from "@/mock/auth";

export type TenantProfilePayload = {
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
      if (isDemoMode) {
        return demoUser
    }
    const { data } = await API.get<ProfilePayload>('auth/profile')
    return data.data 
}