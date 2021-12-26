import React from 'react';
import styled from "styled-components";
import { db } from '../../../firebase';
import {addDoc, collection} from 'firebase/firestore'

const SidebarOption = ({Icon, title, addChannelOption}) => {

  const  addChannel = async () => {
    const  channelName = prompt("Please enter channel name");
    const usersCollectionRef = collection(db, 'rooms')
    if (channelName) {
      await addDoc(usersCollectionRef, {name: channelName})
    }
  }

  const selectChannel = () => {

  }

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small'
                     style={{padding: 10}}/>} {/*Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.*/}
      {Icon
        ? (<h3>{title}</h3>)
        : (
          <SidebarOptionChannel>
            <span>#</span>{title}
          </SidebarOptionChannel>
        )
      }
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`

`;
