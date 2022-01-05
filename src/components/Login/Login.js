import React from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {provider} from '../../firebase'

const Login = () => {
  const auth = getAuth();

  const signIn = () => {
    signInWithPopup(auth, provider).catch(error=>{
      alert(error)
    })
  }


  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the Philip SLACK</h1>
        <p>philip.###.com</p>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;

`;

const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color:#0a8d48 !important; // rewrote default MaterialUI style
    color: white;
  }
`;

