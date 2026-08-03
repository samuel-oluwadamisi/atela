'use client'
import { StaffMember } from '@/mock/staff'
import { useGetStaffById } from '../hooks/useStaff'

const GetStaffByIdScreen = ({staffMember}: {staffMember: StaffMember}) => {
    //  const { data:staffData, isPending } = useGetStaffById(id)
    console.log(staffMember) 
  return (
    <>
       <p>{staffMember.firstName} {staffMember.lastName}</p>
    </>
  )
}

export default GetStaffByIdScreen