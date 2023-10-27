
import { Box, Button, Divider, Grid, GridItem, Select, Stack, Text } from "@chakra-ui/react"
import {  TwitterPicker } from 'react-color';
import { MdArrowDropDown } from "react-icons/md";
import BusinessCard from "./BusinessCard";
import { useEffect, useState } from "react";
import { CardProps } from "@/types";
const BusinessDesign = (props:CardProps) => {
    
    const handleInput = (e:any) => {
        e.persist()
        if(props.parentProps)props.parentProps(e.target.name,e.target.value)
    }
    const handlePrimaryColor = (color:any) =>{
         if(props.parentProps) props.parentProps("primary_color",color.hex)
    }
    const handleSecondaryColor = (color:any) =>{
        if(props.parentProps) props.parentProps("secondary_color",color.hex)
   }
  return (
    <div className='p-2 h-full '>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={{base:5,md:3}}  >
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>Color</Text>
                <Stack py={1} spacing={4}>
                    <Text fontSize={'sm'}>Primary Color</Text>
                    <TwitterPicker  color={'#B83280'}  onChangeComplete={handlePrimaryColor} />
                </Stack>
                {/* <Stack py={1}spacing={4}>
                    <Text fontSize={'sm'}>Profile Text Color</Text>
                    <TwitterPicker   color={'#DD6A1F'} onChangeComplete={handleInput} />
                </Stack> */}
                <Stack py={1} spacing={4}>
                    <Text fontSize={'sm'}>Secondary Color</Text>
                    <TwitterPicker  color={'#EC8936'} onChangeComplete={handleSecondaryColor} />
                </Stack>
                <Divider my={5} py={.125} bg={'gray.400'}/>
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>Font Style</Text>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Font</Text>
                        <Select width={{base:'',md:'30vh'}} icon={<MdArrowDropDown  />} size={'sm'} placeholder='' name="font_style" onChange={handleInput} >
                            <option value='' disabled selected>Select an option..</option>
                            <option value='montserrat'>Montserrat</option>
                            <option value='raleway'>Raleway</option>
                            <option value='lekton'>Lekton</option>
                            <option value='crete_round'>Crete Round</option>
                            <option value='roboto'>Roboto</option>
                            <option value='open_sans'>Open Sans</option>
                            <option value='poppins'>Poppins</option>
                        </Select>
                    </Stack>
                </Box>
                <Box pb={3} pt={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Title Font Size</Text>
                        <Select width={{base:'',md:'30vh'}} icon={<MdArrowDropDown  />} size={'sm'} placeholder='' name="title_size" onChange={handleInput}>
                           
                            <option value='' disabled selected>Select an option..</option>
                            <option value='18'>18</option>
                            <option value='20'>20</option>
                            <option value='22'>22</option>
                            <option value='24'>24</option>
                            <option value='26'>26</option>
                            <option value='28'>28</option>
                            <option value='30'>30</option>
                        </Select>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem colStart={{base:0,md:4}} colEnd={{base:4,md:7}} bg='' >
                {/* for viewing of Card  */}
               <BusinessCard {...props}/>
            </GridItem>
        </Grid>
    </div>
  )
}

export default BusinessDesign
