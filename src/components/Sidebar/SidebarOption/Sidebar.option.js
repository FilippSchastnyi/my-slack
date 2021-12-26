import React from 'react';
import styled from "styled-components";
import {db} from '../../../firebase';
import {addDoc, collection} from 'firebase/firestore'
import {useDispatch} from "react-redux";
import {enterRoom} from "../../../features/appSlice";

const SidebarOption = ({Icon, title, addChannelOption, id}) => {
  const usersCollectionRef = collection(db, 'rooms')
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");

    !channelName.trim() // trim() method removes whitespace from both ends of a string and returns a new string
      ? alert('Wrong value')
      : await addDoc(usersCollectionRef, {name: channelName})
  }

  const selectChannel = () => {
    if (id){
      dispatch(enterRoom({
        roomId: id
      }))
    }
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
    padding: 0 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  margin-top: 10px;
  font-weight: 300;

`;
