"use client"
import { Menu,MenuButton,MenuList,MenuItem,Button, Image } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
const Navbar = () => {
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
                    src='https://scontent.fmnl5-2.fna.fbcdn.net/v/t39.30808-1/298400958_4842043112563572_3512472702234696023_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH9WPCBfVKSzqiikEHKcxKDYc0Nlygp9u1hzQ2XKCn27Zx8knGzdrnwam8SD88_EmlLp-SKxkfpAmvSA7GtePjG&_nc_ohc=uoFydG0SBlkAX_w5r4a&_nc_ht=scontent.fmnl5-2.fna&cb_e2o_trans=t&oh=00_AfBpkemw7YU7y1FsSNbg1CYn8y2LP1RXtW0km366LMS4dA&oe=652C3B55'
                    alt='Simon the pensive'
                    mr='12px'
                  />  Joel Marano
                  </div>
                </MenuButton>
                <MenuList zIndex={'tooltip'} >
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar