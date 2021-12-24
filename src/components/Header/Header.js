import React from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";
import {AccessTime, Search, HelpOutline} from "@mui/icons-material";

const Header = () => {
  return <HeaderContainer>

    <HeaderLeft>
      <HeaderAvatar
        // TODO Add on click
      />
      <AccessTime/>
    </HeaderLeft>

    <HeaderSearch>
      <Search/>
      <input placeholder='Search ...'/>
    </HeaderSearch>

    <HeaderRight>
      <HelpOutline/>
    </HeaderRight>
  </HeaderContainer>
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  padding: 0 20px;
  flex: 0 1 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRight = styled.div`
  flex: 0 1 30%;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;

  > .MuiSvgIcon-root {
    margin-left: 15px; // if we have more then one ico
  }
`;

const HeaderSearch = styled.div`
  flex: 0 1 40%;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  align-items: center;
  color: grey;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;


