import React from "react";
import office from "../assets/office.jpg";
import styled from "styled-components";

const DevImage = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${office});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default DevImage;
