import { AbsoluteCenter, Box, Button, Center, Circle, Divider, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Montserrat } from 'next/font/google'
import { montserrat, raleway,lekton,crete_round, roboto,open_sans,poppins } from '@/constants'
import { MdOfflineShare, MdPersonAddAlt } from 'react-icons/md'
import { CardProps } from '@/types'
import { Link } from '@chakra-ui/next-js'
import { ClassNames } from '@emotion/react'
const BusinessCard = (cardProps:CardProps) => {

  var website = cardProps.website ?? "";
  var work_address = cardProps.work_address ?? "";
  var title_size = cardProps.title_size ?? "";
  var font_style;
  var primary_color = cardProps.primary_color ?? "orange.400";
  var secondary_color = cardProps.secondary_color ?? "pink.600";

  if(cardProps.font_style != ""){
    switch (cardProps.font_style) {
        case "montserrat":
                font_style = montserrat.className
            break;
        case "raleway":
            font_style = raleway.className
        break;
        case "lekton":
            font_style = lekton.className
        break;
        case "crete_round":
            font_style = crete_round.className
        break;
        case "roboto":
            font_style = roboto.className
        break;
        case "open_sans":
            font_style = open_sans.className
        break;
        case "poppins":
            font_style = poppins.className
        break;
        default:
            break;
    }
  }
  const handleClick = () =>{
  }
  return (
    <div className="sticky top-10">
         <Box shadow={'dark-lg'} mx={'auto'} overflowY={'auto'} overflowX={'hidden'} position={'sticky'} bg={'black'}  top={'10'} borderRadius={35} border={'8px'} height={'500px'} width={'270px'}
          className={ cardProps.font_style != "" ? font_style : montserrat.className} > 
            <Box position={'relative'} top={0}  >
                <Box position={'absolute'} width={'full'} top={0} zIndex={'-2'}   > 
                    <Box position={'relative'} left={-20} width={'180%'} className='rotate-[25deg]' >
                        <Image  objectFit='cover' src="/_images/doodad1.png" height={220} width={'100%'} /> 
                        <Box position={'absolute'} opacity={'0.9'} top={0} height={220} width={'100%'} bgGradient={'linear(to-r, '+primary_color+', '+secondary_color+' )'}  >
                        </Box>
                    </Box>
                </Box>
                <Box position={'absolute'} bg={'white'} left={-20} overflow={'hidden'} height={'170px'} className='rotate-[25deg]' width={'180%'} top={'23.5'} zIndex={'-1'}   > 
                    <Image  objectFit='cover' mt={-10} height={280} width={'full'} src="/_images/buildings.jpg"  className='rotate-[-25deg]'  /> 
                    <Box position={'absolute'} opacity={'0.75'} top={0} height={230} width={'100%'} bg='white'  >
                        </Box>
                    <Image src="/_images/man.png" objectFit={'cover'} position={'absolute'}  className='rotate-[-25deg]' top={10}  height={230} pl={210}/>
                    <Image src={
                        cardProps.company_logo == "" || cardProps.company_logo == null ? "/_images/ford-logo.png" : cardProps.company_logo

                    } position={'absolute'}  className='rotate-[-25deg]' top={12} pl={'75px'}  height={'60px'}/>
                </Box>
            </Box>
            {/* Typograph here */}
            <Box position={'relative'} top={'230'}  px={3}  >
                <Stack color={'white'}  width={'80%'} pb={1} >
                    <Text noOfLines={2} 
                    fontSize={
                        title_size != "" ? title_size+"px":"2xl"
                    } fontWeight={'extrabold'}
                    lineHeight={'7'}>
                        {cardProps.first_name == "" || cardProps.first_name == null ? "FULL NAME" : 
                        ((cardProps.prefix?.toUpperCase() ?? "")+" "+cardProps.first_name?.toUpperCase()+" "+(cardProps.last_name?.toUpperCase() ?? "")+" " +(cardProps.suffix?.toUpperCase() ?? ""))}
                       
                    </Text>
                </Stack>
                <Text pb={2}color={primary_color} fontWeight={'semibold' } fontSize={'xs'} >{cardProps.designation == "" || cardProps.designation == null ? ("SALES MANAGER") : cardProps.designation}</Text>
                <Text pb={2} color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >
                    {cardProps.summary == "" || cardProps.summary == null? 
                       (" Maintaining the appearance of websites by enforcing content standars. Designing visual imagery for websites and ensuring that they are in line with branding for clients.")
                    : (cardProps.summary)
                    }
                    
                </Text>
                <Stack direction="row" h={
                     website != "" && work_address != "" ? 
                    ('55px') : (website != "" && work_address == "")  || (website == "" && work_address != "")   ? 
                    ('45px') : "35px"
                }  >
                    <Divider orientation='vertical'  borderColor={'black'} width={'2'} outlineColor={'black'} bgGradient={'linear(to-b, '+primary_color+','+secondary_color+')'} />
                    <Stack spacing={0}>
                        <SimpleGrid columns={2} spacing={0}>
                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Email</Text>
                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >{cardProps.email == "" || cardProps.email == null  ? ("card-pro@websites.com") : cardProps.email}</Text>

                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Contact No.</Text>
                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >{cardProps.phone == "" || cardProps.phone == null? ("+63900000000") : cardProps.phone}</Text>

                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Company</Text>
                            <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >{cardProps.company?.toUpperCase()}</Text>
                            {cardProps.website != "" && cardProps.website != null ? 
                            (   <>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Website</Text>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >{cardProps.website}</Text>  
                                </>)
                                : ""
                            }
                            {cardProps.work_address != "" && cardProps.work_address != null ? 
                            (   <>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >Work Address</Text>
                                    <Text color={'white'} fontWeight={'semibold' } fontSize={'3xs'} >{cardProps.work_address}</Text>  
                                </>)
                                : ""
                            }
                        </SimpleGrid>
                        <Box py={2} ml={-4} >
                            <Center>
                                <Stack direction={'row'} >
                                    {
                                        cardProps.facebook_url != "" && cardProps.facebook_url != null ? 
                                        (<Link href={cardProps.facebook_url ?? ""} target='_blank'> 
                                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-facebook-240.png'/>
                                        </Link>)
                                        :""
                                    }
                                    {
                                        cardProps.instagram_url != "" && cardProps.instagram_url != null ? 
                                        (<Link href={cardProps.instagram_url ?? ""} target='_blank'> 
                                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-instagram-240.png'/>
                                        </Link>)
                                        :""
                                    }
                                    {
                                        cardProps.linkedin_url != "" && cardProps.linkedin_url != null ? 
                                        (<Link href={cardProps.linkedin_url ?? ""} target='_blank'> 
                                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-linkedin-240.png'/>
                                        </Link>)
                                        :""
                                    }
                                    {
                                        cardProps.telegram_url != "" && cardProps.telegram_url != null ? 
                                        (<Link href={cardProps.telegram_url ?? ""} target='_blank'> 
                                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-telegram-240.png'/>
                                        </Link>)
                                        :""
                                    }
                                    {
                                        cardProps.twitter_url != "" && cardProps.twitter_url != null ? 
                                        (<Link href={cardProps.twitter_url ?? ""} target='_blank'> 
                                            <Image alt='' objectFit={'cover'} borderRadius={'full'} boxSize={'30px'} src='/_images/icons8-twitter-240.png'/>
                                        </Link>)
                                        :""
                                    }
                                </Stack>
                            </Center>
                        </Box>
                        <Box pb={4} ml={-4} >
                            <SimpleGrid columns={2} spacing={2} >
                                <Button onClick={handleClick} bgColor={primary_color}  leftIcon={<MdOfflineShare/>} px={'6'} size={'xs'} fontSize={'3xs'}>SHARE YOUR CONTACT</Button>
                                <Button leftIcon={<MdPersonAddAlt/>}size={'xs'} fontSize={'3xs'}>
                                ADD TO CONTACTS</Button>
                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    </div>
  )
}

export default BusinessCard