import { Box, Divider, FormControl, FormLabel, Grid, GridItem, Input, Select, SimpleGrid, Stack, Switch, Text } from "@chakra-ui/react"
import { GithubPicker, SketchPicker, SwatchesPicker, TwitterPicker } from 'react-color';
import { MdArrowDropDown } from "react-icons/md";
import BusinessCard from "./BusinessCard";
import { useState } from "react";
import { CardProps } from "@/types";
const BusinessLaunch = (props:CardProps) => {
    const [isAuto, setisAuto] = useState(false)
    const handleInput = (e:any) => {
        e.persist()
        if(props.parentProps) props.parentProps(e.target.name,e.target.value)
        if(e.target.name == "auto_generated") {
            setisAuto(!isAuto)
            if(!isAuto) if(props.parentProps)  props.parentProps("self_domain","")
        }
    }
    return (
    <div className='p-2 h-full '>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={{base:5,md:3}}  >
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>URL Domain</Text>
                <Stack py={1} spacing={4}>
                    <Text color={'blackAlpha.600'} fontSize={'xs'}>Select a domain for your card.</Text>
                    <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                        <Switch  id='email-alerts' name="auto_generated" colorScheme={'purple'}size={'lg'} fontSize={'sm'} onChange={handleInput}/ >
                        <FormLabel htmlFor="email-alerts">Auto-generated</FormLabel>
                    </FormControl>
                    <Box pb={3}>
                    <Grid  templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:4,md:2}} bg='' >
                            <Box display={'flex'} gap={4} >
                                <Input value="cardpro.com" placeholder='' size='sm'  readOnly/>
                                <Text fontWeight={'extrabold'}>/</Text>
                            </Box>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Input placeholder='' size='sm' name="self_domain" 
                                    disabled={isAuto ? true:false}
                                    value={props.self_domain}
                                    onChange={handleInput}
                                />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                </Stack>
                <Divider my={5} py={.125} bg={'gray.400'}/>
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>Two-way contact sharing</Text>
                <Stack py={1} spacing={4}>
                    <Text color={'blackAlpha.600'} fontSize={'xs'}>Collect contact information from potential leads.</Text>
                    <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                        <Switch id='email-alerts' name="enable_tcs" colorScheme={'purple'}size={'lg'} fontSize={'sm'} onChange={handleInput}/ >
                        <FormLabel htmlFor="email-alerts">Enable</FormLabel>
                    </FormControl>
                    <Box bgColor={'blackAlpha.100'} p={'4'}>
                        <Stack>
                            <Text fontSize={'xs'} color={'blackAlpha.600'}>Select what data you want to collect.</Text>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'} disabled isChecked/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Name</FormLabel>
                            </FormControl>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'}  disabled isChecked/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Email Address</FormLabel>
                            </FormControl>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'}/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Phone</FormLabel>
                            </FormControl>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'}  disabled isChecked/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Company</FormLabel>
                            </FormControl>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'}/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Designation</FormLabel>
                            </FormControl>
                            <FormControl as={SimpleGrid} columns={1} display={'flex'} gap={3}>
                                <Switch id='email-alerts' colorScheme={'purple'}size={'md'} fontSize={'sm'}/ >
                                <FormLabel htmlFor="email-alerts" fontSize={'sm'}>Message</FormLabel>
                            </FormControl>
                        </Stack>
                    </Box>
                </Stack>
            </GridItem>
            <GridItem colStart={{base:0,md:4}} colEnd={{base:4,md:7}} bg='' >
                {/* for viewing of Card  */}
               <BusinessCard {...props}/>
            </GridItem>
        </Grid>
    </div>
  )
}

export default BusinessLaunch