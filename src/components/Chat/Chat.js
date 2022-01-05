import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {InfoOutlined, StarBorderOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectRoomId} from "../../features/appSlice";
import ChatInput from "./ChatInput/ChatInput";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {db} from "../../firebase";
import {collection, doc, orderBy, query} from "firebase/firestore";
import Message from "./ChatMessage/Message";


const Chat = () => {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && doc(db, 'rooms', roomId)
  )
  const [roomMessages, loading] = useCollection(
    roomId && query(collection(doc(db, 'rooms', roomId), 'messages'),
      orderBy('timestamp', 'asc')
    ))

  useEffect(() => {
    chatRef?.current?.scrollIntoView({behavior: 'smooth'})
  }, [roomId, loading])


  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
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
            {roomMessages?.docs.map((doc, index) => {
              const {message, user, userImage, timestamp} = doc.data()
              return (
                <Message
                  key={doc.id + index}
                  message={message}
                  user={user}
                  userImage={userImage}
                  timestamp={timestamp}
                />
              )
            })}
            <ChatBottom ref={chatRef}/>
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}

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

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
