import React from 'react';
import styled from "styled-components";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create, ExpandLess, ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption/Sidebar.option";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {db} from "../../firebase";

const Sidebar = () => {
  const usersCollectionRef = collection(db, 'rooms')
  const [channels, loading, error] = useCollection(usersCollectionRef)

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

      <SidebarOption Icon={InsertComment} title="Threads"/>
      <SidebarOption Icon={Inbox} title="Mentions & reactions"/>
      <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
      <SidebarOption Icon={PeopleAlt} title="People and user groups"/>
      <SidebarOption Icon={Apps} title="Apps"/>
      <SidebarOption Icon={FileCopy} title="file browser"/>
      <SidebarOption Icon={ExpandLess} title="Show less"/>
      <hr/>
      <SidebarOption Icon={ExpandMore} title="Channels"/>
      <hr/>
      <SidebarOption Icon={Add} addChannelOption title="Add channels"/>

      {channels?.docs.map(doc => ( //Optional chaining ?.
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}/>
      ))}
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

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
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
