"use client"
import { Card, CardHeader, CardBody, CardFooter,Text, FormControl, Stack, InputGroup, InputRightElement, Button, SimpleGrid, Alert, AlertIcon } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import {useState} from 'react'
import { API_URL } from '@/constants'
const Signup = () => {
 
  const [user, setUser] = useState({
    'first_name':'',
    'last_name':'',
    'email_address':'',
    'password':'',
    'conf_password':'',
  })
  const [response, setResponse] = useState({
    'message' : '',
    'status'  : '',
  })
  const [isMatch, setisMatch] = useState(true)
  const [isSubmitting, setisSubmitting] = useState(false)
  const handleInput = (e:any) => {
    setUser({...user,[e.target.name]:e.target.value});
  }
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    var newpass = user.password;
    var confpass = user.conf_password;
    if(newpass != confpass) {
        setisMatch(false);
        setisSubmitting(false)
        return;
    }
    else {
        setisMatch(true)
        setisSubmitting(true)
        const options = {
            method: 'POST',
             headers: {
                 "Content-Type": 'application/json',
             },
             body: JSON.stringify(user)
         };
         try {
            const url = `${API_URL}/signup`;
            const res = await fetch(url, options);
            const data = await res.json();
            setTimeout(() => {
                setResponse({...response,['message']: data['message'],['status']: data['status']})
                setisSubmitting(false)
            }, 1000);
        } catch (err) {
                console.log(err);
        }
    }
}

  return (
    <section className='w-[28%] mx-auto pt-[120px]'> 
        <Card >
            <CardHeader pb={0}  alignSelf={'left'} fontSize={'xl'}fontWeight={'bold'}>
                <Text fontWeight={'extrabold'} fontSize={'2xl'}>Sign Up</Text> 
                <Text color={'blackAlpha.600'} fontSize={'xs'}>Create your own account.</Text> 
            </CardHeader>
            <CardBody >
                <Alert status='error' display={!isMatch ? "flex" : "none"}>
                    <AlertIcon />
                    <Text fontSize={'sm'}>Your password does not match. </Text>
                </Alert>
                <Alert status={response.status == "success" ? "success" : "error"} display={response.status == 'success' || response.status == "error"? "flex" : "none"}>
                    <AlertIcon />
                    <Text fontSize={'sm'}>{response.message}</Text>
                </Alert>
                <form onSubmit={handleSubmit} method="post">
                <FormControl isRequired pt={2}>
                    <SimpleGrid columns={2} spacing={2} pb={2}>
                        <Input type='text' focusBorderColor='#8959D9' id="first_name" name="first_name"  placeholder='First name' onChange={handleInput}/>
                        <Input type='text' focusBorderColor='#8959D9' id="last_name" name="last_name" placeholder='Last name' onChange={handleInput} />
                    </SimpleGrid>
                    <Stack spacing={2}>
                        <Input type='email' focusBorderColor='#8959D9'  id="email_address" name="email_address" placeholder='Email address' onChange={handleInput} />
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='New Password'
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
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Confirm New Password'
                                focusBorderColor='#8959D9' 
                                name="conf_password"
                                id="conf_password"
                                onChange={handleInput}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button variant='solid' isLoading={isSubmitting} loadingText='Submitting' type='submit' colorScheme='purple' >Submit</Button>
                    </Stack>
                </FormControl>
                </form>
            </CardBody>
            {/* <CardFooter alignSelf={'center'}>
                Don't have an account? 
                <Link color='purple.500' href='#' pl={1}>
                    Sign up
                </Link>
            </CardFooter> */}
        </Card>
    </section>
  )
}

export default Signup