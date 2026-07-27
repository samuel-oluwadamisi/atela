import GetStaffByIdScreen from "@/features/admin/team-output/screens/GetStaffByIdScreen";



type Props = {
  params: Promise<{
    id: string;
  }>;
};
const StaffByIdPage = async({params}: Props) => {
    const { id } = await params
   
  return (
    <>
    <GetStaffByIdScreen id= {id} />
    </>
  )
}

export default StaffByIdPage