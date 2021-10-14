import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h1>ANGEL SOFTWARES</h1>
      <h5>Copyright 2021. All Rights Reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: #2478d8;
  h1 {
    letter-spacing: 3px;
  }
`;

export default Footer;
