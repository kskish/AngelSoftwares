import React from "react";
import styled from "styled-components";
import shopify from "../assets/shopify-bag.png";
import ai from "../assets/ai-logo.png";

const OurExpertise = () => {
  return (
    <Wrapper>
      <Container>
        <Example1>
          <img src={shopify} />
          <h1>Mobile & Web Application</h1>
          <p>Development of an application</p>
        </Example1>
        <Example2>
          <h1>Add-On For Shopify</h1>
          <div>
            Shopify's clients needed an add-on to propose other products that
            the buyers may also like. Based on big data acquisition, we were
            able to predict the buyer's preference and push the good products
            using the Amazon artificiel intelligence services.
          </div>
          <Ai />
        </Example2>
      </Container>
      <h1>Few Examples From Our Expertise!</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 98%;
  height: 60%;
  display: flex;
`;
const Example1 = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 20px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  & h1 {
    @media (max-width: 600px) {
      font-size: 15px;
      margin-top: 20px;
    }
  }
`;
const Example2 = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 18px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-align: center;
  }
`;

const Ai = styled.div`
  height: 20%;
  width: 30%;
  background-image: url(${ai});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 25px;
`;

export default OurExpertise;
