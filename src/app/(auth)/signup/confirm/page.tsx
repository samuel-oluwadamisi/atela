import ConfirmScreen from '@/features/auth/screens/Confirm'
import React from 'react'


type PageProps = {
  searchParams: Promise<{
    email?: string;
  }>;
};


const ConfirmPage =async ({ searchParams }: PageProps)  => {

    const { email } = await searchParams;

    if (!email) {
   return <p>No Email provided please go back</p>
  }


  return (
    <div> <ConfirmScreen email={email}/> </div>
  )
}

export default ConfirmPage