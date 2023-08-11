import  {Box } from '@chakra-ui/layout';
import {useState} from "react";
import axios from 'axios'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import Chatbox from '../components/ChatBox';
import MyChats from '../components/MyChats';
import  {ChatState} from '../Context/ChatProvider';

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
     const {user}=ChatState();
     return (
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box display="flex"justifyContent="space-between" width="100%" h="91.5vh" p="10px" >
          {user && <MyChats  fetchAgain={fetchAgain}  />}
          {user &&  <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
        </Box>
      </div>
    );
   
};

export default ChatPage;
