'use client';
import { SessionProvider ,useSession } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";

export const Auth = ({ Children ,session }) => {
    // const session =useSession()
    console.log(Session)
   
  return (<SessionProvider session={Session} >{Children}</SessionProvider>);
};
