import React from 'react';
import styled from "styled-components";
import {InfoOutlined, StarBorderOutlined} from "@mui/icons-material";

const Chat = () => {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4><strong>#Room name</strong></h4>
          <StarBorderOutlined/>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined/> Details
          </p>
        </HeaderRight>
      </Header>
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
