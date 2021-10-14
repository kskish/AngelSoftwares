import React from "react";
import styled from "styled-components";
import shopify from "../assets/shopify.png";
import ai from "../assets/ai-logo.png";
import power from "../assets/power-app.png";

const OurExpertise = () => {
  return (
    <Wrapper>
      <Container>
        <Example1>
          <img src={ai} />
          <h1>AI</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            eveniet temporibus impedit praesentium reprehenderit placeat
            distinctio sunt accusamus facilis reiciendis, est exercitationem
            iure? Vitae corporis tempora laboriosam facilis ducimus. Doloribus?
          </p>
        </Example1>
        <Example2>
          <img src={shopify} />
          <h1>Add-On For Shopify</h1>
          <p>
            Shopify's clients needed an add-on to propose other products that
            the buyers may also like. Based on big data acquisition, we were
            able to predict the buyer's preference and push the good products
            using the Amazon artificiel intelligence services.
          </p>
        </Example2>
        <Example3>
          <img src={power} />
          <h1>Power App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            minus magni repellat, explicabo minima sunt ad alias itaque
            repudiandae voluptates. Error eaque assumenda non natus ipsa dolor
            eveniet dicta. A!
          </p>
        </Example3>
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
  margin-top: 100px;
`;
const Example1 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    height: 30%;
    width: 60%;
  }
  & h1 {
    height: 10%;

    @media (max-width: 600px) {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  & p {
    height: 60%;
    font-size: 16px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const Example2 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    height: 30%;
    width: 60%;
  }
  & h1 {
    height: 10%;

    @media (max-width: 600px) {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  & p {
    height: 60%;
    font-size: 16px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

const Example3 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -6px;
  & img {
    height: 30%;
    width: 60%;
  }
  & h1 {
    height: 10%;
    @media (max-width: 600px) {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  & p {
    height: 60%;
    font-size: 16px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export default OurExpertise;
