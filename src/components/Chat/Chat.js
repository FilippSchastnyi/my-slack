import React from 'react';
import styled from "styled-components";
import {InfoOutlined, Message, StarBorderOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectRoomId} from "../../features/appSlice";
import ChatInput from "./ChatInput/ChatInput";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {db} from "../../firebase";
import {collection, doc} from "firebase/firestore";


const Chat = () => {
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && doc(db, 'rooms', roomId)
  )
  const [roomMessages] = useCollection(
    roomId && collection(doc(db, 'rooms', roomId), 'messages')
  )

  console.log(roomMessages?.docs)


  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#{roomDetails?.data().name}</strong></h4>
            <StarBorderOutlined/>
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined/> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomMessages?.docs.map(doc => {
            const {message, user, userImage} = doc.data()
            return (
              <Message
                key={doc.id}
                message={message}
                user={user}
                userImage={userImage}
              />
            )
          })}
        </ChatMessages>

        <ChatInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 1 1 100%;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const ChatMessages = styled.div`

`;
