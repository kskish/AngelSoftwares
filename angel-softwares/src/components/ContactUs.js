import React from "react";
import styled from "styled-components";
import mail from "../assets/mail.jpg";
import location from "../assets/location.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const ContactUs = () => {
  return (
    <Wrapper>
      <Info>
        <h1>Contact Us</h1>
        <h3>Marc-Alexandre Curodeau</h3>
        <h3>macurodeau@angelsoftwares.ca</h3>
        <h3>Mobile (418) 952-7545</h3>
        <h3>Office: 190 Rue Dorchester, Québec, QC G1K 5Y9</h3>
        <Location />
      </Info>
      <FormContainer>
        <Form>
          <Fname>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              type="text"
              style={{ width: "80%" }}
              required
            />
          </Fname>
          <Lname>
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              type="text"
              style={{ width: "80%" }}
              required
            />
          </Lname>
          <Email>
            <TextField
              id="standard-password-input"
              label="Email"
              type="email"
              variant="standard"
              style={{ width: "80%" }}
              required
            />
          </Email>
          <Message>
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              style={{ width: 500, height: 100 }}
            />
          </Message>
          <ButtonDiv>
            <Button type="submit" variant="contained">
              SEND
            </Button>
          </ButtonDiv>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const Info = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  & h1,
  h3 {
    padding-left: 15px;
  }
`;

const Location = styled.div`
  width: 80%;
  height: 30%;
  margin: 0 auto;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const Form = styled.form`
  display: flex;
  height: 60%;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Fname = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Lname = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Email = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export default ContactUs;
