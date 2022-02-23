import React, { Component } from "react";
import { Link } from "react-router-dom";
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

import { reduxForm } from "redux-form";

class SignupForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Label>Join FANDOM Today</Label>
          <SubLabel>
            already have an account? <Link to="/login">Sign in</Link>
          </SubLabel>
        </Header>
        <FormWrapper>
          <RightWrapper>
            <h3>Connect a Social Account</h3>
            <OauthButtons>
              <FbAuthButton>Connect with Facebook</FbAuthButton>
              <GoogleAuthButton>Connect with Google</GoogleAuthButton>
              <TwitterAuthButton>Connect with Twitter</TwitterAuthButton>
            </OauthButtons>
          </RightWrapper>
          <LeftWrapper>
            <h3>Register with Email</h3>
            <Userform>
              <UserInput
                name="email"
                id="email"
                component={AuthInput}
                label="Email"
                type="email"
              />
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
              <UserInput
                name="confirmpassword"
                id="confirmpassword"
                component={AuthInput}
                label="Confirm Password"
                type="password"
              />
              <SubmitButton type="submit">Register now</SubmitButton>
            </Userform>
          </LeftWrapper>
        </FormWrapper>
      </Container>
    );
  }
}

export default reduxForm({
  form: "signupform",
})(SignupForm);
