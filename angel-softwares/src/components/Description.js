import React from "react";
import styled from "styled-components";
import office from "../assets/office.jpg";

const Description = () => {
  return (
    <Wrapper>
      <Method>
        <h1>Method</h1>
        <div>
          Our firm is dedicated to the management of IT projects. We can work
          with your resources as well as ours. Our resources are made up of
          freelancers and local IT specialists where each one has very specific
          expertise. ​ Projects are cut into small work blocks by our project
          managers and are redistributed to the various external resources using
          the AGILE method. Validation, compilation, and tests are carried out
          by our IT specialists, which allows us to guarantee the results and
          quality. The project managers and our IT specialists will be your
          direct contacts for the follow-ups and the delivery of the project.
        </div>
      </Method>

      <Security>
        <h1>Security</h1>
        <div>
          Even if we select freelancers from various countries, the projects are
          broken down so that each subcontractor does not have an overview of
          what we are doing. In this case, the validation, the compilation, and
          the testing are still carried out by our local employees. ​ If
          applicable, the passwords used for development are modified at the end
          of the project. Our freelancers will no longer have access to the
          data, if this is the case.
        </div>
      </Security>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${office});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Method = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(220, 220, 220, 0.7);
  position: relative;

  & h1 {
  }

  & div {
    width: 90%;
    line-height: 25px;
    font-size: 20px;
  }
`;

const Security = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(68, 101, 189, 0.7);
  position: relative;
  & h1 {
  }

  & div {
    width: 90%;
    line-height: 25px;
    font-size: 20px;
  }
`;

export default Description;
