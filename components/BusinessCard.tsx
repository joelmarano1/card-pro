import { AbsoluteCenter, Box, Button, Center, Circle, Divider, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { montserrat, noto_sans, roboto_condensed } from '@/constants'
import { MdOfflineShare, MdPersonAddAlt } from 'react-icons/md'
const BusinessCard = () => {
  return (
    <div className="sticky top-10">
         <Box shadow={'dark-lg'} mx={'auto'} overflow={'hidden'} position={'sticky'} bg={'black'}  top={'10'} borderRadius={35} border={'8px'} height={'500px'} width={'270px'}> 
            <Box position={'relative'} top={0}  >
                <Box position={'absolute'} width={'full'} top={0} zIndex={'-2'}   > 
                    <Box position={'relative'} left={-20} width={'180%'} className='rotate-[25deg]' >
                        <Image  objectFit='cover' src="/_images/doodad1.png" height={220} width={'100%'} /> 
                        <Box position={'absolute'} opacity={'0.9'} top={0} height={220} width={'100%'} bgGradient='linear(to-r, pink.600, orange.400)'  >
                        </Box>
                    </Box>
                </Box>
                <Box position={'absolute'} bg={'white'} left={-20} overflow={'hidden'} height={'170px'} className='rotate-[25deg]' width={'180%'} top={'23.5'} zIndex={'-1'}   > 
                    <Image  objectFit='cover' mt={-10} height={280} width={'full'} src="/_images/buildings.jpg"  className='rotate-[-25deg]'  /> 
                    <Box position={'absolute'} opacity={'0.75'} top={0} height={230} width={'100%'} bg='white'  >
                        </Box>
                    <Image src="/_images/man.png" objectFit={'cover'} position={'absolute'}  className='rotate-[-25deg]' top={10}  height={230} pl={210}/>
                    <Image src="/_images/ford-logo.png" objectFit={'cover'} position={'absolute'}  className='rotate-[-25deg]' top={10} pl={70}  height={65}/>
                </Box>
            </Box>
            {/* Typograph here */}
            <Box position={'relative'} top={'230'}  px={3}>
                <Stack color={'white'} fontSize={'2xl'} fontWeight={'extrabold'} width={'75%'} pb={1} >
                    <Text noOfLines={2} className={montserrat.className} lineHeight={'7'}>TANGGOL DIMAGUIBA</Text>
                </Stack>
                <Text pb={2}color={'orange.400'} fontWeight={'semibold' } fontSize={'xs'} >SALES MANAGER</Text>
                <Text pb={2} color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >
                    Maintaining the appearance of websites by enforcing content standars.
                    Designing visual imagery for websites and ensuring that they are in line with branding for clients.
                </Text>
                <Box pb={2}>
                    <Stack direction="row" h='35px' >
                        <Divider orientation='vertical' borderColor={'black'} width={'2'} outlineColor={'black'} bgGradient='linear(to-b, pink.500, orange.400)' />
                        <Stack spacing={0}>
                            <SimpleGrid columns={2} spacing={0}>
                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Email</Text>
                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >joelmarano1@gmail.com</Text>

                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Contact No.</Text>
                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >09295948571</Text>

                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Company</Text>
                                <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Ford Philippines</Text>
                            </SimpleGrid>
                        </Stack>
                    </Stack>
                </Box>
                <Box bg={''} pb={2} >
                    <Center>
                        <Stack direction={'row'} >
                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-facebook-240.png'/>
                            <Image alt=''  objectFit={'cover'}borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-instagram-240.png'/>
                            <Image alt=''  objectFit={'cover'}borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-linkedin-240.png'/>
                        </Stack>
                    </Center>
                </Box>
                <Box>
                    <SimpleGrid columns={2} spacing={2}>
                        <Button colorScheme='orange'  leftIcon={<MdOfflineShare/>} px={'5'} size={'xs'} fontSize={'3xs'}>SHARE YOUR CONTACT</Button>
                        <Button leftIcon={<MdPersonAddAlt/>}size={'xs'} fontSize={'3xs'}>
                        ADD TO CONTACTS</Button>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default BusinessCard