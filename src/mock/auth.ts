import { TenantProfilePayload } from "@/features/user/api/getUser";

type ProfilePayload = {
        userId: string;
        email: string;
        role: string;
        tenant: TenantProfilePayload;
}

export const demoUser: ProfilePayload  = {
    userId: "1aa",
    role: "Admin",
    email: "demo@example.com",
    tenant: {
        tenantId: '1aa',
        teamSize: 10,
        tenantName: "Atela Fashion"
    }
};

export const demoToken = "demo-access-token";

