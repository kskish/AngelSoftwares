import React from "react";
import styled from "styled-components";
import office from "../assets/Typing.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper>
      <h1>Contact us to discuss your project</h1>
      <h4>Without obligation or pressure.</h4>
      <Link
        to={"/contact_us"}
        style={{ textDecoration: "none", color: "#aeaeae" }}
      >
        <Button variant="contained" style={{ height: "50px" }}>
          Contact Us
        </Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${office});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  & h1 {
    font-size: 50px;
  }

  & h4 {
    margin-bottom: 10%;
  }
`;

export default Contact;
