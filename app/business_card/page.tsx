"use client"
import BusinessSetup from "@/components/BusinessSetup"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {HiEye} from "react-icons/hi2"
import { Tabs,TabList,TabIndicator,TabPanels,TabPanel,Tab, Box, Heading,Text, Portal, Button } from "@chakra-ui/react"
import BusinessDesign from "@/components/BusinessDesign"
import BusinessLaunch from "@/components/BusinessLaunch"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
const page = () => {
    const {data:session, status} = useSession();
    // if(!session?.user && status === "unauthenticated" ) redirect('/login')
    const [card, setCard] = useState({
        'first_name' : '',
        'last_name' : '',
    })
    const [tabIndex, setTabIndex] = useState(0)
    const [buttonState, setButtonState] = useState({
        'back': true,
        'finish':false,
    })
    const handleState = (name:string,value:string) => {
        setCard({...card,[name]:value})
        console.log(card)
    } 
    const handleTab = (index:number )=> {
        setTabIndex(index)
    }
    const prevNextTab = (index:number,type:string) => {
        if(type === "prev" && index !== 0) {
            setTabIndex(index-1)
            if(index === 1)setButtonState({...buttonState,['back']: true,['finish']:false})
            else if(index === 2) setButtonState({...buttonState,['back']: false,['finish']:false})
        } 
        else if(type === "next" && index !== 2) {
            setTabIndex(index+1) 
            if(index === 0 )  setButtonState({...buttonState,['back']: false,['finish']:false})
            else if(index === 1) setButtonState({...buttonState,['back']: false,['finish']:true})
        } 
        
        if(type === "next" && index === 2 && buttonState.finish){
            //***save data here***// 

        }
    }
    return (
    <div className="h-96 pt-1">
        <Tabs  index={tabIndex} onChange={handleTab} position="relative"  variant="unstyled" >
            <TabList  position={'sticky'} top={{base:0,md:19}} shadow={"lg"} zIndex={"sticky"}  blockSize={{base:"52px",lg:"70px"}} >
                <Tab bg={'#f2f2f2'}  width={{base:"51rem",md:"40",lg:"72"}} textAlign="left">
                    <Box className="w-full">
                        <Text py='1' color={'gray.500'} fontSize={{base:"xs",md:"2xs"}} >
                            Step 1
                        </Text>
                        <Heading display={{base:'none',md:'block'}} fontSize={{base:"3xs",md:"xs"}} textTransform='uppercase'>
                            setup
                        </Heading>
                    </Box>
                </Tab>
                <Tab bg={'#f2f2f2'} width={{base:"51rem",md:"40",lg:"72"}} textAlign="left">
                    <Box className="w-full">
                        <Text py='1' color={'gray.500'} fontSize={{base:"xs",md:"2xs"}} >
                            Step 2
                        </Text>
                        <Heading display={{base:'none',md:'block'}}fontSize={{base:"3xs",md:"xs"}} textTransform='uppercase'>
                            design
                        </Heading>
                    </Box>
                </Tab>
                <Tab bg={'#f2f2f2'}  width={{base:"51rem",md:"40",lg:"72"}} textAlign="left">
                    <Box className="w-full">
                        <Text py='1' color={'gray.500'} fontSize={{base:"xs",md:"2xs"}} >
                            Step 3
                        </Text>
                        <Heading display={{base:'none',md:'block'}}fontSize={{base:"3xs",md:"xs"}} textTransform='uppercase'>
                            launch
                        </Heading>
                    </Box>
                </Tab>
                <Tab border={"1px"}  alignItems={'center'} display={{base:'flex',md:'none'}} width={{base:"15",md:"40",lg:"72"}} fontWeight={'bold'} bgColor={'#E2E2E3'}>
                    <HiEye display={{base:"block",md:"none",lg:"none"}}/>
                </Tab>
                <Button isDisabled={buttonState.back} onClick={() => {prevNextTab(tabIndex,"prev")}} width={{base:"12",md:"40",lg:"72"}} height={'full'} rounded={'none'} fontWeight={'bold'} bgColor={'#E2E2E3'}textAlign="left">
                    <Text fontSize={{base:"3xs",md:"md"}} display={{base:"none",md:"block",lg:"block"}}>  BACK</Text>
                    <ChevronLeftIcon display={{base:"block",md:"none",lg:"none"}}/>
                </Button>
                <Button  onClick={() => {prevNextTab(tabIndex,"next")}}  height={'full'} rounded={'none'} width={{base:"12",md:"40",lg:"72"}} colorScheme="purple" fontWeight={'bold'} color={'white'}textAlign="left">
                    <Text fontSize={{base:"3xs",md:"md"}} display={{base:"none",md:"block",lg:"block"}}> {buttonState.finish ? "FINISH" : "NEXT"}  <ChevronRightIcon/></Text>
                     <ChevronRightIcon display={{base:"block",md:"none",lg:"none"}}/>
                </Button>
            </TabList>
            <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="purple.500"
            borderRadius="1px"
            />
         
            <TabPanels boxShadow={"lg"}>
                <TabPanel shadow={'lg'} minHeight={{base:"100vh",md:"87vh",lg:"75.9vh",xl:"80.5vh"}} maxHeight={{base:"100vh",md:"82vh",lg:"81.9vh",xl:"86.5vh"}} overflow={'scroll'}>
                    <BusinessSetup parentProps = {handleState} {...card}/>
                </TabPanel>
                <TabPanel shadow={'lg'} minHeight={{base:"100vh",md:"87vh",lg:"75.9vh",xl:"86.5vh"}} maxHeight={{base:"100vh",md:"82vh",lg:"81.9vh",xl:"70.4vh"}} overflow={'scroll'}>
                    <BusinessDesign  parentProps = {handleState}  {...card} />
                </TabPanel>
                <TabPanel  shadow={'lg'} minHeight={{base:"100vh",md:"87vh",lg:"75.9vh",xl:"86.5vh"}} maxHeight={{base:"100vh",md:"82vh",lg:"81.9vh",xl:"70.4vh"}} overflow={'scroll'}>
                    <BusinessLaunch  parentProps = {handleState}  {...card}  />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}

export default page