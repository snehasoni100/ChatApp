import 
{ Container ,Box,Text,Tab,TabList,
  TabPanel,TabPanels,Tabs} from '@chakra-ui/react'
import React from 'react'
import Login from "../components/Authentication/Login";
import Signup from '../components/Authentication/Signup';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
function Homepage() {
   const history= useNavigate();
   useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"));

    if(user)
    {
        history('/chats');
    }
},[history]);

  return(
    <Container maxW="xl" centerContent>
    <Box 
    display='flex'
    justifyContent='center'
    padding={3}
    bg={"white"}
    width="100%"
    m="40px 0 15px 0"
    borderRadius="1g"
    borderWidth="1px">
      <Text fontSize='4xl' fontFamily="work sans" color='black' textAlign='center'>Talk-Tive
      </Text>
    </Box>
    <Box
    
    p={4}
    bg={"white"}
    w="100%"
   
    borderRadius="1g"
    borderWidth="1px">
      <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>

  </Container>
  ) ;
 
}

export default Homepage;
