import React from "react";
import background from "../assets/ai.jpg";
import openAi from "../assets/openai-logo.png";
import styled from "styled-components";
import Button from "@mui/material/Button";

const OpenAi = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <Text>
        <h1>OPEN AI</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          officiis voluptatum minus repellendus. Unde eveniet, reprehenderit
          nesciunt consequatur, ut eos veritatis, fugiat dolores alias rem non
          maxime quam! Optio, illo.
        </h3>
        <Button variant="contained">Learn more</Button>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Logo = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  align-items: center;
  background-image: url(${openAi});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Text = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  & h1 {
    font-size: 60px;
  }
`;

export default OpenAi;
