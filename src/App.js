import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import styled from "styled-components";
import Chat from "./components/Chat/Chat";


function App() {
  return (
    <Router>
      <>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route path="/"
                   exact
                   element={<Chat/>} />
          </Routes>
        </AppBody>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
