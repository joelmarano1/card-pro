import { Box, Divider, Grid, GridItem, Select, Stack, Text } from "@chakra-ui/react"
import { GithubPicker, SketchPicker, SwatchesPicker, TwitterPicker } from 'react-color';
import { MdArrowDropDown } from "react-icons/md";
const BusinessDesign = () => {
  return (
    <div className='p-2 h-full '>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={{base:5,md:3}}  >
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>Color</Text>
                <Stack py={1} spacing={4}>
                    <Text fontSize={'sm'}>Primary Color</Text>
                    <TwitterPicker  />
                </Stack>
                <Stack py={1}spacing={4}>
                    <Text fontSize={'sm'}>Profile Text Color</Text>
                    <TwitterPicker    />
                </Stack>
                <Stack py={1} spacing={4}>
                    <Text fontSize={'sm'}>Secondary Color</Text>
                    <TwitterPicker     />
                </Stack>
                <Divider my={5} py={.125} bg={'gray.400'}/>
                <Text pb={2} fontWeight={'semibold'}fontSize={{base:"xl"}}>Font Style</Text>
                <Box pb={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Font</Text>
                        <Select width={{base:'',md:'30vh'}} icon={<MdArrowDropDown  />} size={'sm'} placeholder='' >
                            <option value='Montserrat'>Montserrat</option>
                            <option value='Raleway'>Raleway</option>
                            <option value='Lekton'>Lekton</option>
                            <option value='Crete Round'>Crete Round</option>
                            <option value='Roboto'>Roboto</option>
                            <option value='Arial'>Arial</option>
                            <option value='Open Sans'>Open Sans</option>
                            <option value='Poppins'>Poppins</option>
                        </Select>
                    </Stack>
                </Box>
                <Box pb={3} pt={3}>
                    <Stack spacing={2}>
                        <Text fontSize={'sm'}>Title Font Size</Text>
                        <Select width={{base:'',md:'30vh'}} icon={<MdArrowDropDown  />} size={'sm'} placeholder='' >
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
            <GridItem colStart={{base:0,md:4}} colEnd={{base:0,md:7}} bg='papayawhip' >
                {/* for viewing of Card  */}
            </GridItem>
        </Grid>
    </div>
  )
}

export default BusinessDesign