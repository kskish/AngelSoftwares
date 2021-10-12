import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const NavigationBar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <h1>LOGO</h1>
      </LogoContainer>
      <Navigation>
        <Home>Home</Home>
        <Button variant="outlined" style={{ marginRight: "50px" }}>
          Ask for a FREE quote
        </Button>
      </Navigation>
    </Wrapper>
  );
};

//CSS - Using Styled Components
const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  height: 100px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  margin-left: 20px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Home = styled.h3`
  margin-right: 50px;
  color: gray;

  @media (max-width: 600px) {
    color: purple;
  }
`;

export default NavigationBar;
