import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";

import AuthInput from "../authInput/authInput";
import {
  Container,
  Header,
  Label,
  SubLabel,
  FormWrapper,
  RightWrapper,
  LeftWrapper,
  OauthButtons,
  FbAuthButton,
  GoogleAuthButton,
  Userform,
  UserInput,
  SubmitButton,
  TwitterAuthButton,
} from "./auth.styled";

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Label>Welcome Back!</Label>
          <SubLabel>
            Don't have an account? <Link to="/signup">Register now</Link>
          </SubLabel>
        </Header>
        <FormWrapper>
          <RightWrapper>
            <h3>Sign in with a social account</h3>
            <OauthButtons>
              <FbAuthButton>Sign in with Facebook</FbAuthButton>
              <GoogleAuthButton>Sign in with Google</GoogleAuthButton>
              <TwitterAuthButton>Sign in with Twitter</TwitterAuthButton>
            </OauthButtons>
          </RightWrapper>
          <LeftWrapper>
            <h3>Sign in with username</h3>
            <Userform>
              <UserInput
                name="username"
                id="username"
                component={AuthInput}
                label="Username"
                type="text"
              />
              <UserInput
                name="password"
                id="password"
                component={AuthInput}
                label="Password"
                type="password"
              />
              <SubmitButton type="submit">Sign In</SubmitButton>
            </Userform>
          </LeftWrapper>
        </FormWrapper>
      </Container>
    );
  }
}

export default reduxForm({ form: "loginform" })(LoginForm);
