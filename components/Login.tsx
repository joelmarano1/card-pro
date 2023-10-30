"use client"
import { Card, CardHeader, CardBody, CardFooter,Text, FormControl, Stack, InputGroup, InputRightElement, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import {useState} from 'react'
import { API_URL } from '@/constants'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter();
  const [user, setUser] = useState({
        'email_address':'',
        'password':'',
  })  
  const [isSubmitting, setisSubmitting] = useState(false)
  const [response, setResponse] = useState({
    'message' : '',
    'status'  : '',
  })
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleInput = (e:any) => {
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setisSubmitting(true)
    const login = await signIn('credentials',{
        ...user,
        redirect:false,
    });
    if(login?.error === "CredentialsSignin")  {
        setResponse({...response,['status']:'error',['message']:'Account does not exist.'});
        setisSubmitting(false);
    }
    else router.push("/");
  }
  return (
    <section className='w-[28%] mx-auto pt-[120px]'> 
        <Card >
            <CardHeader alignSelf={'center'} fontSize={'xl'}fontWeight={'bold'}>
                Log in to your account
            </CardHeader>
            <CardBody>
                <Alert status={response.status == "error" ? "error" : "success"} display={response.status == 'error' ? "flex" : "none"}>
                    <AlertIcon />
                    <Text fontSize={'sm'}>{response.message}</Text>
                </Alert>
                <form method="post" onSubmit={handleSubmit}>
                <FormControl pt={2} isRequired>
                    <Stack spacing={2}>
                        <Input type='email' focusBorderColor='#8959D9'  placeholder='Email address'  id="email_address"  name="email_address" onChange={handleInput}/>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                focusBorderColor='#8959D9' 
                                name="password" 
                                id="password" 
                                onChange={handleInput}
                                />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button variant='solid' type='submit' isLoading={isSubmitting} loadingText='Submitting' colorScheme='purple' >Submit</Button>
                    </Stack>
                </FormControl>
                </form>
            </CardBody>
            <CardFooter alignSelf={'center'}>
                Don't have an account? 
                <Link color='purple.500' href='/signup' pl={1}>
                    Sign up
                </Link>
            </CardFooter>
        </Card>
    </section>
  )
}

export default Login