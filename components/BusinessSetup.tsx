import {Image, Box, Grid, GridItem, Input, Stack, Text, Textarea, Select, Portal } from '@chakra-ui/react'
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

const BusinessSetup = () => {
  return (
    <div className='p-2 h-full '>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={{base:5,md:3}}  >
                <Text pb={2} fontWeight={'semibold'} fontSize={{base:"xl"}}>Profile Information</Text>
                <Text fontSize={{base:"xs"}}>Add your profile information to show in your digital business card</Text>
                <Box pt={3} pb={3} >
                    <Text pb={2} fontSize={{base:"sm"}}>User Image</Text>
                    <Image alt='' borderRadius={'full'} boxSize={100} src='/_images/defaultImg.png'/>
                </Box>
                <Box pb={3}>
                    <Grid  templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>First Name</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Last Name</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Prefix</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Suffix</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Designation</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Department</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Pronouns</Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Company   </Text>
                                <Input placeholder='' size='sm' />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Summary</Text>
                        <Textarea placeholder='' size='sm' />
                    </Stack>
                </Box>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Company Logo</Text>
                        <Input type='file' accept='image/png, image/jpeg, image/jpg' placeholder='' size='sm' />
                    </Stack>
                </Box>
                <Text pb={2} fontWeight={'semibold'} pt={4} fontSize={{base:"xl"}}>Contact Details</Text>
                <Text pb={4} fontSize={{base:"xs"}}>Add contact information</Text>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Phone</Text>
                                <Input placeholder='Enter phone number' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Box pt={{md:'7'}}>
                                    <Select  icon={<MdArrowDropDown  />} size={'sm'} placeholder='' >
                                        <option value='1'>Work</option>
                                        <option value='2'>Personal</option>
                                        <option value='3'>Other</option>
                                    </Select>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Email</Text>
                                <Input type='email' placeholder='Enter email address' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Box pt={{md:'7'}}>
                                    <Select  icon={<MdArrowDropDown  />} size={'sm'} placeholder='' >
                                        <option value='1'>Work</option>
                                        <option value='2'>Personal</option>
                                        <option value='3'>Other</option>
                                    </Select>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Website</Text>
                                <Input type='url' placeholder='Enter website URL' size='sm' />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Box pt={{md:'7'}}>
                                    <Select  icon={<MdArrowDropDown  />} size={'sm'} placeholder='' >
                                        <option value='1'>Work</option>
                                        <option value='2'>Personal</option>
                                        <option value='3'>Other</option>
                                    </Select>
                                </Box>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Work Address</Text>
                        <Textarea placeholder='Enter work address' size='sm' />
                    </Stack>
                </Box>
                <Text pb={2} fontWeight={'semibold'}pt={4} fontSize={{base:"xl"}}>Social Links</Text>
                <Box pb={10}>
                    <Stack direction='row'>
                        <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-facebook-240.png'/>
                        <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-instagram-240.png'/>
                        <Image alt='' shadow={'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-linkedin-240.png'/>
                        <Image alt='' shadow={'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-telegram-240.png'/>
                        <Image alt='' shadow={'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-twitter-240.png'/>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem colStart={{base:0,md:4}} colEnd={{base:0,md:7}} bg='' >
                <Box shadow={'dark-lg'} mx={'auto'} overflow={'hidden'} bg={'black'} position={'sticky'}  top={'10'} borderRadius={35} border={'8px'} height={'500px'} width={'270px'}> 
                    <Box position={'relative'} top={2}  >
                        <Box position={'absolute'} width={'full'} top={0} zIndex={'-2'}   > 
                            <Box position={'relative'} left={-20} width={'180%'} className='rotate-[25deg]' >
                                <Image  objectFit='cover' src="/_images/doodad1.png" height={230} width={'100%'} /> 
                                <Box position={'absolute'} opacity={'0.9'} top={0} height={230} width={'100%'} bgGradient='linear(to-r, pink.600, orange.400)'  >
                                </Box>
                            </Box>
                        </Box>
                        <Box position={'absolute'} bg={'white'} left={-20} overflow={'hidden'} height={'180px'} className='rotate-[25deg]' width={'180%'} top={'23.5'} zIndex={'-1'}   > 
                            <Image  objectFit='cover' mt={-10} height={280} width={'full'} src="/_images/buildings.jpg"  className='rotate-[-25deg]'  /> 
                            <Box position={'absolute'} opacity={'0.75'} top={0} height={230} width={'100%'} bg='white'  >
                                </Box>
                            <Image src="/_images/man.png" objectFit={'cover'} position={'absolute'}  className='rotate-[-25deg]' top={10}  height={230} pl={210}/>
                            <Image src="/_images/ford-logo.png" objectFit={'cover'} position={'absolute'}  className='rotate-[-25deg]' top={10} pl={70}  height={65}/>
                        </Box>
                    </Box>
                    {/* Typograph here */}


                </Box>
            </GridItem>
        </Grid>
    </div>
  )
}

export default BusinessSetup