

export {default} from "next-auth/middleware"

export const config ={matcher:['/wellnesspromotation','/healthequity','/Mentalhealthsupport','/remotepatient']};

// import { withAuth } from "next-auth/middleware"

// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => token?.userRole === "admin",
//   },
// })