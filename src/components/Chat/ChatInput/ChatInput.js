import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import {db} from "../../../firebase";
import {addDoc, collection, doc, Timestamp } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase";

const ChatInput = ({channelName, channelId, chatRef}) => {
  const [input, setInput] = useState('')
  const [user] = useAuthState(auth)


  const sendMessage = async (e) => {
    e.preventDefault() // so, we dont need refresh the page after submit
    if (!channelId) return false
    const roomsDoc = doc(db, 'rooms', channelId)
    const messagesCollectionRef = collection(roomsDoc, 'messages')

    await addDoc(messagesCollectionRef, {
      message: input,
      user: user.displayName,
      userImage: user.photoURL,
      timestamp: Timestamp.now()
    })

    chatRef.current.scrollIntoView({
      behavior: 'smooth'
    })

    setInput('')
  }
  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} placeholder={`Message #${channelName}`}/>
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    display: flex;
    justify-content: center;
    position: relative;
  }

  > form input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
