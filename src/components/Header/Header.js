import React from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";
import {AccessTime} from "@mui/icons-material";

const Header = () => {
  return <HeaderContainer>
    {/* Header left */}
    <HeaderLeft>
      <HeaderAvatar
      // TODO Add on click
      />
      <AccessTime/>
    </HeaderLeft>
    {/* Header Search */}

    {/* Header Right */}
  </HeaderContainer>
};

export default Header;

const HeaderContainer = styled.div``;
const HeaderLeft = styled.div``;
const HeaderAvatar = styled(Avatar)``;
