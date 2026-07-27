'use client'
import { useGetStaffById } from '../hooks/useStaff'

const GetStaffByIdScreen = ({id}: {id:string}) => {
     const { data:staffData, isPending } = useGetStaffById(id)
    console.log(staffData)
  return (
    <>
      {isPending ? ('Loading' ): (
        staffData?.data.firstName + ' ' + staffData?.data.lastName 
      )
    }
    </>
  )
}

export default GetStaffByIdScreen