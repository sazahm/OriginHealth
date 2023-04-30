import React from 'react'
import Input from './Input';
import Button from '../components/Button';
import styled from 'styled-components';
import background from "../Images/background.jpg"
import {NavLink} from "react-router-dom"

const UserLogin = () => {
  return (
    <Container>
    <MainContainer >
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
      <NavLink to="/userdashboard">
      <Button content="Sign In" />
      </NavLink>
    </ButtonContainer>
    <AdminText>Or Sign In As</AdminText>
    <ButtonContainer>
      <NavLink to="/admin">
      <Button content="Admin"/>
      </NavLink>
    </ButtonContainer>
  </MainContainer>
  </Container>
  )
}

const Container = styled.div`
background: url(${background});
background-size: cover;
display: flex;
justify-content: center;
align-items: center; 
height: 100vh;
width: 100vw;
`;

const MainContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
// background: rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}
@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
`;

const WelcomeText = styled.h2`
margin: 3rem 0 2rem 0;
color: #000000;
display: flex;
justify-content: center;
align-items: center; 
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;

const ButtonContainer = styled.div`
margin: 2.2rem 0 1.1rem 0;
width: 100%;
align-items: center;
justify-content: center;
text-align:center

`;

const AdminText = styled.h4`
margin: 0;
color: #000000;
letter-spacing: 0.2rem;
display: flex;
justify-content: center;
align-items: center; 
`;

export default UserLogin