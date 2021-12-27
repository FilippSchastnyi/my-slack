import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import {db} from "../../../firebase";
import {addDoc, collection} from "firebase/firestore";

const ChatInput = ({channelName, channelId}) => {
  const [input, setInput] = useState('')
  const usersCollectionRef = collection(db, 'rooms')

  const sendMessage = async (e) => {
    e.preventDefault() // so, we dont need refresh the page after submit
    console.log(channelId)
    if (!channelId) return false
    await addDoc(collection(usersCollectionRef.doc(channelId),'messages'), {message: input})
  }
  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} placeholder={`Message #ROOM`}/>
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
