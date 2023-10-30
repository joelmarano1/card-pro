"use client"
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
export default  function Home() {
  const {data:session, status} = useSession();
  useEffect(() => {
    if(!session?.user && status === "unauthenticated" )  redirect('/login')
    console.log(status)

  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        {JSON.stringify(session)}
    </main>
  )
}
