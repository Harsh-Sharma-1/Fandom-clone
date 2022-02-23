import React from "react";
import SignupForm from "../components/authForms/signupForm";
import SimpleHeader from "../components/simpleheader/simpleHeader";
import styled from "styled-components";

const Signup = () => (
  <SignUpContainer>
    <SimpleHeader />
    <SignupForm />
  </SignUpContainer>
);

export default Signup;

const SignUpContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
`;
