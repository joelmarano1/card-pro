"use client"
import { Menu,MenuButton,MenuList,MenuItem,Button, Image } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
const Navbar = () => {
  const {data:session,status} = useSession();
  return (
    <nav className=" h-full flex items-center justify-between pb-3 px-4 z-50 lg:px-2 py-3 bg-[#8959D9]  ">
        <div className="flex items-center gap-2 text-white lg:pl-10" >
            <div className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            <h1>Card PRO</h1>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
            <div className="hidden lg:block ">
              <Menu>

                <MenuButton as={Button} size='md' rightIcon={<ChevronDownIcon />}>
                <div className="flex justify-between items-center ">
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='/_images/avatar.png'
                    alt='Simon the pensive'
                    mr='15px'
                  />  {session?.user?.name}
                  </div>
                </MenuButton>
                <MenuList zIndex={'tooltip'} >
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem onClick={() => signOut({ callbackUrl: '/login' })}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar