import {Image, Box, Grid, GridItem, Input, Stack, Text, Textarea, Select, Portal, SimpleGrid, Button, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import BusinessCard from './BusinessCard';
import { CardProps } from '@/types';
import { HiOutlineTrash } from 'react-icons/hi2';

const BusinessSetup = (props:CardProps) => {
  const [previewLogo,setPreviewLogo] = useState('');
  const [socialLink, setSocialLink] = useState({
    'facebook':false,
    'instagram':false,
    'linkedin':false,
    'telegram':false,
    'twitter':false,
  })
  const handleInput = (e:any) => {
    e.persist()
    if(props.parentProps)  props.parentProps(e.target.name,e.target.value)
  
  }
  const handleUpload = (e:any) => {
    if(e.target.value.length > 0){
    if(props.parentProps)  props.parentProps(e.target.name,URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleSocialLinks = (name:string) => {
    var current ;
    switch (name) {
        case "facebook":
            current = socialLink.facebook;
            setSocialLink({...socialLink,['facebook']: !current})
            break;
        case "instagram":
            current = socialLink.instagram;
            setSocialLink({...socialLink,['instagram']: !current})
            break;
        case "linkedin":
            current = socialLink.linkedin;
            setSocialLink({...socialLink,['linkedin']: !current})
            break;
        case "telegram":
            current = socialLink.telegram;
            setSocialLink({...socialLink,['telegram']: !current})
            break;
        case "twitter":
            current = socialLink.twitter;
            setSocialLink({...socialLink,['twitter']: !current})
            break;
        default:
            break;
    }
    if(current)if(props.parentProps)props.parentProps(name+"_url","")
  }
  return (
    <div className='md:p-2 h-full '>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={{base:5,md:3}}  >
                <Text pb={2} fontWeight={'semibold'} fontSize={{base:"xl"}}>Profile Information</Text>
                <Text color={'blackAlpha.600'} fontSize={{base:"xs"}}>Add your profile information to show in your digital business card</Text>
                <Box pt={3} pb={3} >
                    <Text pb={2} fontSize={{base:"sm"}}>User Image</Text>
                    <Image alt='' borderRadius={'full'} boxSize={100} src='/_images/defaultImg.png'/>
                </Box>
                <Box pb={3}>
                    <Grid  templateColumns='repeat(4, 1fr)' gap={4} >
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>First Name</Text>
                                <Input placeholder='' size='sm' name='first_name'  textTransform={'uppercase'} onChange={handleInput} />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Last Name</Text>
                                <Input placeholder='' size='sm' name='last_name' textTransform={'uppercase'} onChange={handleInput} />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Prefix</Text>
                                <Input placeholder='' size='sm'  name='prefix' textTransform={'uppercase'} onChange={handleInput}  />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'} maxLength="2">Suffix</Text>
                                <Input placeholder='' size='sm'  name='suffix' textTransform={'uppercase'} onChange={handleInput}  />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Designation</Text>
                                <Input placeholder='' size='sm'  name='designation' textTransform={'uppercase'} onChange={handleInput}  />
                            </Stack>
                        </GridItem>
                        <GridItem colStart={{base:1,md:3}} colEnd={{base:6,md:5}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Company</Text>
                                <Input placeholder='' size='sm'  name='company' textTransform={'uppercase'}  onChange={handleInput} />
                            </Stack>
                        </GridItem>
                    </Grid>
                </Box>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Summary</Text>
                        <Textarea  placeholder='' size='sm'  name='summary' onChange={handleInput} />
                    </Stack>
                </Box>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Company Logo</Text>
                        <Input type='file' name="company_logo" accept='image/png, image/jpeg, image/jpg' placeholder='' size='sm' onChange={handleUpload} />
                    </Stack>
                </Box>
                <Text pb={2} fontWeight={'semibold'} pt={4} fontSize={{base:"xl"}}>Contact Details</Text>
                <Text pb={4} color={'blackAlpha.600'} fontSize={{base:"xs"}}>Add contact information</Text>
                <Box pb={3}>
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                        <GridItem colSpan={{base:5,md:2}} bg='' >
                            <Stack spacing={2}>
                                <Text fontSize={'sm'}>Phone</Text>
                                <Input placeholder='Enter phone number' size='sm'   name='phone' onChange={handleInput} />
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
                                <Input type='email' placeholder='Enter email address' size='sm' name='email' onChange={handleInput} />
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
                                <Input type='url' placeholder='Enter website URL' size='sm'  name='website' onChange={handleInput} />
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
                        <Textarea placeholder='Enter work address' size='sm' name='work_address' onChange={handleInput} />
                    </Stack>
                </Box>
                <Text pb={2} fontWeight={'semibold'}pt={4} fontSize={{base:"xl"}}>Social Links</Text>
                <Box pb={10}>
                    <Stack direction='row'>
                        <Image alt='' onClick={() => {
                            handleSocialLinks('facebook')
                        }} cursor={'pointer'} boxShadow={socialLink.facebook ? 'outline' : 'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-facebook-240.png'/>
                        <Image alt='' onClick={() => {
                            handleSocialLinks('instagram')
                        }} cursor={'pointer'} boxShadow={socialLink.instagram ? 'outline' : 'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-instagram-240.png'/>
                        <Image alt='' onClick={() => {
                            handleSocialLinks('linkedin')
                        }} cursor={'pointer'} boxShadow={socialLink.linkedin ? 'outline' : 'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-linkedin-240.png'/>
                        <Image alt='' onClick={() => {
                            handleSocialLinks('telegram')
                        }} cursor={'pointer'} boxShadow={socialLink.telegram ? 'outline' : 'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-telegram-240.png'/>
                        <Image alt='' onClick={() => {
                            handleSocialLinks('twitter')
                        }} cursor={'pointer'} boxShadow={socialLink.twitter ? 'outline' : 'lg'} borderRadius={'full'}  boxSize={30} src='/_images/icons8-twitter-240.png'/>
                    </Stack>
                </Box>
                <Stack >
                    <SimpleGrid columns={{base:1,md:2}} spacing={5}>
                        <Stack display={socialLink.facebook ? "flex" : "none"} direction={'row'} alignItems={'center'}>
                            <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-facebook-240.png'/>
                            <Text>Facebook</Text>
                        </Stack>
                        <Stack display={socialLink.facebook ? "flex" : "none"} direction={'row'}  >
                            <Input value={props.facebook_url} size={'sm'} name="facebook_url" placeholder='Enter your Facebook URL here..' onChange={handleInput}></Input>
                            <IconButton aria-label='Remove' size={'sm'} colorScheme='red' icon={<HiOutlineTrash/>} onClick={() => {
                            handleSocialLinks('facebook')
                            }}/>
                        </Stack>
                        <Stack display={socialLink.instagram ? "flex" : "none"}direction={'row'} alignItems={'center'}>
                            <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-instagram-240.png' />
                            <Text>Instagram</Text>
                        </Stack>
                        <Stack display={socialLink.instagram ? "flex" : "none"} direction={'row'}  >
                            <Input value={props.instagram_url} size={'sm'} name="instagram_url" placeholder='Enter your Instagram URL here..' onChange={handleInput}></Input>
                            <IconButton aria-label='Remove' size={'sm'} colorScheme='red' icon={<HiOutlineTrash/>} onClick={() => {
                            handleSocialLinks('instagram')
                            }}/>
                        </Stack>
                        <Stack  display={socialLink.linkedin ? "flex" : "none"} direction={'row'} alignItems={'center'}>
                            <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-linkedin-240.png' />
                            <Text>LinkedIn</Text>
                        </Stack>
                        <Stack  display={socialLink.linkedin ? "flex" : "none"} direction={'row'}  >
                            <Input  value={props.linkedin_url} size={'sm'} name="linkedin_url" placeholder='Enter your LinkedIn URL here..' onChange={handleInput}></Input>
                            <IconButton aria-label='Remove' size={'sm'} colorScheme='red' icon={<HiOutlineTrash/>} onClick={() => {
                            handleSocialLinks('linkedin')
                            }}/>
                        </Stack>
                        <Stack  display={socialLink.telegram ? "flex" : "none"}direction={'row'} alignItems={'center'}>
                            <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-telegram-240.png'/>
                            <Text>Telegram</Text>
                        </Stack>
                        <Stack  display={socialLink.telegram ? "flex" : "none"} direction={'row'}  >
                            <Input value={props.telegram_url}  size={'sm'} name="telegram_url" placeholder='Enter your Telegram URL here..' onChange={handleInput}></Input>
                            <IconButton aria-label='Remove' size={'sm'} colorScheme='red' icon={<HiOutlineTrash/>} onClick={() => {
                            handleSocialLinks('telegram')
                            }}/>
                        </Stack>
                        <Stack  display={socialLink.twitter ? "flex" : "none"}direction={'row'} alignItems={'center'}>
                            <Image alt='' shadow={'lg'} borderRadius={'full'} boxSize={30} src='/_images/icons8-twitter-240.png'/>
                            <Text>Twitter</Text>
                        </Stack>
                        <Stack  display={socialLink.twitter ? "flex" : "none"}direction={'row'}  >
                            <Input value={props.twitter_url}  size={'sm'} name="twitter_url" placeholder='Enter your Twitter URL here..' onChange={handleInput}></Input>
                            <IconButton aria-label='Remove' size={'sm'} colorScheme='red' icon={<HiOutlineTrash/>} onClick={() => {
                            handleSocialLinks('twitter')
                            }}/>
                        </Stack>
                    </SimpleGrid>
                </Stack>
            </GridItem>
            <GridItem colStart={{base:0,md:4}} colEnd={{base:4,md:7}} bg='' >
               <BusinessCard {...props} />
            </GridItem>
        </Grid>
    </div>
  )
}

export default BusinessSetup