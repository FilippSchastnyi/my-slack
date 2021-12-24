import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/"/>
      </Routes>
    </>
    </Router>
  );
}

export default App;
