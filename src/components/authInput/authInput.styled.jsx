import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const InputBox = styled.input`
  width: 100%;
  background-color: transparent;
  z-index: 2;
  padding: 8px 0px;
  border: none;
  border-bottom: 1px solid lightgray;
  font-weight: 300;
  font-size: 15px;
  color: #2c2c2c;

  &:focus {
    outline: none;
  }

  &:placeholder-shown ~ label {
    opacity: 1;
    top: 50%;
    font-size: 15px;
  }

  &:focus ~ label {
    opacity: 1;
    top: -10%;
    font-size: 12px;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  z-index: 1;
  left: 0;
  top: -12%;
  font-size: 12px;
  transform: translateY(-50%);
  opacity: 1;
  transition: all 0.2s;
  color: #5e5e5e;
`;
