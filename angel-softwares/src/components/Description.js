import React from "react";
import styled from "styled-components";

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
`;

const Method = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & h1 {
    font-style: italic;
    height: 10%;
  }

  & div {
    width: 90%;
    line-height: 25px;
    font-size: 18px;
    height: 90%;
  }
`;

const Security = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 30px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  & h1 {
    font-style: italic;
    height: 10%;
  }

  & div {
    width: 90%;
    line-height: 25px;
    font-size: 18px;
    height: 90%;
  }
`;

export default Description;
