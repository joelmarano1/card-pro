"use client"
import { List,ListItem,Button,ListIcon } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
const SideNav = () => { 
  const [active, setActive] = useState('')
  const handleActive = (props:string) =>{
    setActive(props)
    console.log(props)
  }
  return (
    <div className='shadow-lg h-[92vh] lg:h-[90vh]xl:h-[87.8vh]'>
       <List  spacing={4} py={3} fontSize={"sm"}>
        <Link href="/">
            <ListItem px={7} py={3} onClick={() => handleActive('overview')} color={active == 'overview' ? 'white':'black'}
             bgColor={ active == 'overview' ? 'purple.500' :'#F2F2F2'} _hover={{ bg: "purple.500",color: "white" }}>
                Overview
            </ListItem>
        </Link>
        <Link href="/business_card">
            <ListItem px={7} py={3} onClick={() => handleActive('business_card')} color={active == 'business_card' ? 'white':'black'}
             bgColor={ active == 'business_card' ? 'purple.500' :'#F2F2F2'} _hover={{ bg: "purple.500",color: "white" }}>
            Business Card
            </ListItem>
        </Link>
        <Link href="/">
            <ListItem px={7} py={3} onClick={() => handleActive('contacts')} color={active == 'contacts' ? 'white':'black'}
             bgColor={ active == 'contacts' ? 'purple.500' :'#F2F2F2'} _hover={{ bg: "purple.500",color: "white" }}>
                Contacts 
            </ListItem>
        </Link>
        </List>
    </div>
  )
}

export default SideNav