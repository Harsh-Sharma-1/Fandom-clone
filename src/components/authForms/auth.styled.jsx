import styled from "styled-components";
import { Field } from "redux-form";
export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  min-height: 300px;
  background-color: #fff;
  border: 1px solid lightgray;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const Header = styled.div`
  padding: 40px;
  background-color: #280033;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.h2`
  color: #fff;
  font-weight: 700;
`;

export const SubLabel = styled.h4`
  font-weight: 400;
  color: #fff;
  a {
    color: #ffc500;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const RightWrapper = styled.div`
  flex: 1;
  padding: 30px;
  h3 {
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

export const LeftWrapper = styled(RightWrapper)`
  flex: 1;
`;

export const OauthButtons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FbAuthButton = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: #4b6ea8;
  color: #fff;
  border: none;
  font-size: 15px;
  border-radius: 3px;
`;

export const GoogleAuthButton = styled(FbAuthButton)`
  background-color: #4285f4;
`;

export const TwitterAuthButton = styled(FbAuthButton)`
  background-color: rgb(29, 161, 242);
`;

export const Userform = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserInput = styled(Field)``;

export const SubmitButton = styled(FbAuthButton)`
  background-color: #520044;
  margin-top: 10px;
`;
