import React from "react";
import styled from "styled-components";
import fandom from "../../assets/fandom.png";
const SimpleHeader = () => {
  return (
    <Container>
      <Image src={fandom} />
    </Container>
  );
};

export default SimpleHeader;

const Container = styled.div`
  width: 100%;
  background-color: #ffc500;
  padding: 10px 100px;
`;

const Image = styled.img`
  width: 120px;
`;
