'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



const Remotepatient = () => {

  const { data: session } = useSession();

  if(!session)
  {
    return redirect('/api/auth/signin');
  }
  
  return (
    <div className=' flex justify-center h-screen items-center'>Coming Soon....</div>
  )
}

export default Remotepatient