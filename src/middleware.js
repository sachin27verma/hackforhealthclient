
import { NextResponse } from 'next/server'

import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"

// import { handler } from "./app/api/auth/[...nextauth]"
 
// This function can be marked `async` if using `await` inside
export async function   middleware(request) {
    // const session =  await getSession( {request,handler} )
    // const token = await getToken({request,handler})
    // // console.log(session)
    // console.log(token)
    // if (!session) {
    //     return NextResponse.redirect('/login')
    // }
//   return NextResponse.redirect(new URL( request.url))

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}