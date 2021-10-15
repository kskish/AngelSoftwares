import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import angel_icon from "../assets/angel_icon.png";
import angel_name from "../assets/angel_name.png";

const NavigationBar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <img src={angel_icon} />
        </Logo>
        <Title>
          <img src={angel_name} />
        </Title>
      </LogoContainer>
      <Navigation>
        <Link to={"/"} style={{ textDecoration: "none", color: "#aeaeae" }}>
          <Home>Home</Home>
        </Link>
        <Link
          to={"/contact_us"}
          style={{ textDecoration: "none", color: "#aeaeae" }}
        >
          <Button variant="outlined" style={{ marginRight: "50px" }}>
            Ask for a FREE quote
          </Button>
        </Link>
      </Navigation>
    </Wrapper>
  );
};

//CSS - Using Styled Components
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  height: 100px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 150px;
  height: 60px;
  margin-left: 10px;
  & img {
    height: 100%;
    width: 100%;
    opacity: 0;
    &:hover {
      opacity: 1;
      transition: ease-in-out;
      transition-duration: 1s;
      transform: translateX(20px);
    }
  }
`;
const Logo = styled.div`
  width: 100px;
  height: 80px;
  margin-left: 10px;
  & img {
    height: 100%;
    width: 100%;
  }
`;

const Home = styled.h3`
  margin-right: 50px;
  color: gray;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default NavigationBar;
