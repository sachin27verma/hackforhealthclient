"use client";
import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  // const session =useSession()
  // console.log(session)
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setuser] = useState([{}]);

  useEffect(() => {
    if (session) {
      let user = session["user"];
      setuser(user);
      // console.log(user.image)
      // console.log("Session User ", user);
    }
  }, [session]);

  const handlesignin=(()=>{
    signIn()
  })

  // setCookie("logged", "true", { maxAge: 60 * 60 * 24 * 30 });
  // return  redirect('/healthequity');

  return (
    <>
      {session ? <Avatar src={user.image} /> : <button onClick={handlesignin}> <Avatar  src={user.image}/></button> }
    </>
  );
};

export default Login;
