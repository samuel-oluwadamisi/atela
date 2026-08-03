import { getStaffById } from "@/features/admin/team-output/api/team.api";
import GetStaffByIdScreen from "@/features/admin/team-output/screens/GetStaffByIdScreen";
import { getDemoStaffById, StaffMember } from "@/mock/staff";



type Props = {
  params: Promise<{
    id: string;
  }>;
};
const StaffByIdPage = async({params}: Props) => {
    const { id } = await params
        const staffMember = getDemoStaffById(id);
      if (!staffMember) 
        return <p>Staff Member Not Found</p>;
   
  return (
    <>
    <GetStaffByIdScreen staffMember= {staffMember} />
    </>
  )
}

export default StaffByIdPage