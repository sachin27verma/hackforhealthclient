import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { redirect } from "next/navigation";

import { signOut } from 'next-auth/react'

const Logout = () => {

    const  handleclick =(()=>{

      // redirect('/')
        signOut();
    })
  return (
    <span className='  text-3xl text-white flex justify-center items-center px-2'>
        <button onClick={handleclick}><AiOutlineLogout /></button>
    </span>
  )
}

export default Logout