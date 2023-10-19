"use client"
import { Card, CardHeader, CardBody, CardFooter,Text, FormControl, Stack, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import {useState} from 'react'
const Login = () => {
const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <section className='w-[28%] mx-auto pt-[120px]'> 
        <Card >
            <CardHeader alignSelf={'center'} fontSize={'xl'}fontWeight={'bold'}>
                Log in to your account
            </CardHeader>
            <CardBody>
                <Stack spacing={2}>
                    <Input type='email' focusBorderColor='#8959D9'  placeholder='Email address' />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            focusBorderColor='#8959D9' 
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button variant='solid' colorScheme='purple' >Submit</Button>
                </Stack>
            </CardBody>
            <CardFooter alignSelf={'center'}>
                Don't have an account? 
                <Link color='purple.500' href='#' pl={1}>
                    Sign up
                </Link>
            </CardFooter>
        </Card>
    </section>
  )
}

export default Login