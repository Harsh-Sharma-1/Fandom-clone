import React from "react";
import styled from "styled-components";
import { Container, InputBox, InputLabel } from "./authInput.styled";

const AuthInput = (props) => {
  console.log(props);
  return (
    <Container>
      <InputBox
        type={props.type}
        {...props.input}
        placeholder=" "
        autoComplete="off"
      />
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
    </Container>
  );
};
export default AuthInput;
