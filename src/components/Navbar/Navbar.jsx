'use client'
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
// import {signIn} from 'google/signin'

const Navbar = () => {

  // const session = useSession();
  // console.log(session)
  return (
    <div className=" bg-midnight">
      
      <div className=" text-white md:flex hidden   h-[70px] justify-between items-center w-11/12 mx-auto ">
       
          {" "}
          <Link href='/'>
          <div className=" h-[40px] w-[40px]  relative">
            <Image src={"/logo.png"} fill alt=" logo" />
          </div>{" "}</Link>
        
        <div className=" flex gap-8 text-sm ">
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">HOME</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">PERSONAL CARE</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">AI CARE</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">ABOUT US</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">CONTACT US</div>
        </div>
        <button className=" px-4 py-1 bg-semi-blue rounded-full text-md tracking-wide font-bold shadow-inner text-dark " onClick={() => signIn()}>signIn</button>
      
      </div>
      
      <div className=" text-white flex md:hidden  h-[70px] justify-between items-center w-11/12 mx-auto ">
       
          {" "}
          <Link href='/'>
          <div className=" h-[40px] w-[40px]  relative">
            <Image src={"/logo.png"} fill alt=" logo" />
          </div>{" "}</Link>
        
        <div className=" flex-row gap-3 text-sm ">
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">HOME</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">PERSONAL CARE</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">AI CARE</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">ABOUT US</div>
          <div className=" cursor-pointer active:border-b-2 active:border-semi-blue">CONTACT US</div>
        </div>
        <button className=" px-4 py-1 bg-semi-blue rounded-full text-md tracking-wide font-bold shadow-inner text-dark " onClick={() => signIn()}>signIn</button>
      </div>
     

    </div>
  );
};

export default Navbar;
