import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";

import { signOut } from 'next-auth/react'

const Logout = () => {

    const handleclick=(()=>{

        signOut();
    })
  return (
    <span className='  text-3xl text-white flex justify-center items-center px-2'>
        <button onClick={handleclick}><AiOutlineLogout /></button>
    </span>
  )
}

export default Logout