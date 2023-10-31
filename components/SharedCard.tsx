import { AbsoluteCenter, Box, Button, Center, Circle, Divider, Image, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { montserrat, noto_sans, roboto_condensed } from '@/constants'
import { MdOfflineShare, MdPersonAddAlt } from 'react-icons/md'
import { relative } from 'path'
import { transform } from 'framer-motion'
const SharedCard = () => {
  return (
    <div className="relative bg-gray-300 h-[100vh] top-0">
        <AbsoluteCenter className='bg-yellow-600' display={'flex'} width={{base:"100vw", sm:"480px",md:"480px",lg:"480px"}}>
            <Box shadow={'dark-lg'} overflowY={'scroll'} overflowX={'hidden'} top={0} position={'sticky'} bg={'black'} minHeight={{base:"100vh",md:"100vh",lg:"100vh",xl:"80.5vh"}} maxHeight={{base:"100vh",md:"100vh",lg:"100vh",xl:"86.5vh"}} width={{lg:"480px"}}> 
                <Box position={'relative'}>
                    <Box position={'absolute'}  width={'29rem'} left={'-10'} top={0}  className=''> 
                        <Box position={'relative'} left={-30} width={'140%'} className='rotate-[23deg] '  >
                            <Image  objectFit='cover' src="/_images/doodad1.png" height={330} width={'100%'} /> 
                            <Box  position={'absolute'} opacity={'0.9'} top={0} height={330} width={'100%'} bgGradient='linear(to-r, pink.600, orange.400)'  >
                            </Box>
                        </Box>
                        <Box  position={'absolute'} willChange={'transform'} overflow={'hidden'} bg={'white'} left={-20} height={'270px'} className='rotate-[23deg] ' width={'180%'} top={'3em'} > 
                            {/* <Image zIndex={'overlay'} position={'absolute'} objectFit='cover'  mt={{base:'-90'}} height={370} width={{base:'400'}} src="/_images/buildings.jpg" left={35}  className='rotate-[-23deg]'/>  */}
                            <Box   overflow={'hidden'} position={'relative'} opacity={'0.25'} top={0}  height={370} width={'100%'} bg='red'>
                                <Image  position={'relative'} objectFit='cover' top={-10} mt={{base:'-90'}} height={470} width={{base:'400'}} src="/_images/buildings.jpg" left={35}  className='rotate-[-23deg]'/>  
                            </Box>
                            <Image  src="/_images/man.png" objectFit={'cover'}  position={'absolute'}  className='rotate-[-23deg] pl-[90vw] xs:pl-[350px] sm:pl-[50vw] md:pl-[56vw] lg:pl-[430px] 2xl:pl-[440px] ' top={99} height={320} />
                            <Image src="/_images/ford-logo.png" objectFit={'cover'} position={'absolute'} className='rotate-[-23deg]' top={50} pl={100} height={'13vh'}/> 
                        </Box>
                    </Box>
                </Box>
                {/* Typograph here */}
                <Box position={'relative'} top={'380'}  px={5} mb={'35em'}>
                    <Stack color={'white'} fontSize={'2xl'} fontWeight={'extrabold'} width={'75%'} pb={1} >
                        <Text noOfLines={2} className={montserrat.className} lineHeight={'7'}>GABRIEL MARANO</Text>
                    </Stack>
                    <Text pb={2}color={'orange.400'} fontWeight={'semibold' } fontSize={'sm'} >SALES MANAGER</Text>
                    <Text pb={5} color={'white'} fontWeight={'semibold' } fontSize={'xs'} >
                        Maintaining the appearance of websites by enforcing content standars.
                        Designing visual imagery for websites and ensuring that they are in line with branding for clients.
                    </Text>
                    <Box pb={5}>
                        <Stack direction="row" h='50px' >
                            <Divider orientation='vertical' borderColor={'black'} width={'2'} outlineColor={'black'} bgGradient='linear(to-b, pink.500, orange.400)' />
                            <Stack spacing={0}>
                                <SimpleGrid columns={2} spacing={0}>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >Email</Text>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >joelmarano1@gmail.com</Text>
    
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >Contact No.</Text>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >09295948571</Text>
    
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >Company</Text>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >Ford Philippines</Text>
                                </SimpleGrid>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box pb={2} mt={'1rem'}>
                        <Center>
                            <Stack direction={'row'} >
                                <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'50px'} src='/_images/icons8-facebook-240.png'/>
                                <Image alt=''  objectFit={'cover'}borderRadius={'full'} boxSize={'50px'} src='/_images/icons8-instagram-240.png'/>
                                <Image alt=''  objectFit={'cover'}borderRadius={'full'} boxSize={'50px'} src='/_images/icons8-linkedin-240.png'/>
                            </Stack>
                        </Center>
                    </Box>
                    <Box position={'relative'} w-100 mt={'1rem'} className='mb-["10vh"]'>
                        <Box verticalAlign={'center'}>
                            <Button border='2px' borderRadius={10} borderColor='orange.400' padding={4} width='100%' maxWidth='1366px' colorScheme='transparent' leftIcon={<MdOfflineShare/>} px={'20'} size={'3xl'} fontSize={'xs'}>SHARE YOUR CONTACT</Button>
                        </Box>
                        
                        <Box verticalAlign={'center'} mt={'1rem'}>
                            <center><Text color={'white'} fontWeight={'semibold' } fontSize={'xs'} >Powered By: MetaSolution</Text> </center>
                        </Box>
                    </Box>
                </Box>
                <Box className='bg-black w-full h-20' bottom={0} position={'fixed'} >
                    <Button boxShadow='2xl' borderRadius={'100px'} rounded='md' margin={3} colorScheme={'orange'}  bottom={4} w='94%' padding={4} leftIcon={<MdPersonAddAlt/>} size={'3xl'} fontSize={'xs'}>
                    ADD TO CONTACTS</Button>
                </Box>
            </Box>
        </AbsoluteCenter>
    </div>
  )
}

export default SharedCard