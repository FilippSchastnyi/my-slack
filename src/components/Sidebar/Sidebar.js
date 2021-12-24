import React from 'react';
import styled from "styled-components";
import {Create, FiberManualRecord} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarHeaderLeft>
          <h2>PILIP SLACK HQ</h2>
          <h3>
            <FiberManualRecord/>
            Pilip Shchasny
          </h3>
        </SidebarHeaderLeft>
        <SidebarHeaderRight>
          <Create/>
        </SidebarHeaderRight>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  flex: 0 1 260px;
  background-color: var(--slack-color);
  border-top: 1px solid #49274b;
  padding-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding: 15px;
`;

const SidebarHeaderLeft = styled.div`
  flex: 0 1 100%;

  > h2 {
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-right: 2px;
  }
`;

const SidebarHeaderRight = styled.div`

  > .MuiSvgIcon-root {
    padding: 10px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }

`;
