import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"

export {default} from "next-auth/middleware"
// export default withAuth(

//     function middleware(request :NextRequest){
//         return NextResponse.rewrites(new URL('/',request.url))
//     },
//     {
//         callbacks: {
//             authorized: ({token}) => {}
//         }
//     }

// )

export const config = {matcher: ['/','/business_card']}