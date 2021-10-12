import React from "react";
import styled from "styled-components";
import meeting from "../assets/meeting.jpg";
import farm from "../assets/farm.jpg";
import warehouse from "../assets/warehouse.jpg";
import construction from "../assets/construction.jpg";
import clip from "../assets/clip.mp4";

const ImageGrid = () => {
  return (
    <Wrapper>
      <FirstRow>
        <h2>
          Various IT Projects <br />
          &nbsp;&nbsp; For Various Industries
        </h2>
        <video muted autoPlay loop id="myVideo" width="1000px">
          <source src={clip} type="video/mp4" />
        </video>
      </FirstRow>
      <SecondRow>
        <Picture1 />
        <Picture2 />
      </SecondRow>
      <ThirdRow>
        <Picture3 />
        <Picture4 />
      </ThirdRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FirstRow = styled.div`
  width: 98vw;
  height: 45%;
  margin-bottom: 5px;
  background-color: black;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }

  & h2 {
    z-index: 1;
    top: 200px;
    left: 80px;
    position: absolute;
    font-size: 50px;
    color: white;
  }
`;
const SecondRow = styled.div`
  width: 98vw;
  height: 25%;
  display: flex;
  margin-bottom: 5px;
`;
const ThirdRow = styled.div`
  width: 98vw;
  height: 25%;
  display: flex;
`;
const Picture1 = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${construction});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Picture2 = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(${warehouse});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 5px;
`;
const Picture3 = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(${farm});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Picture4 = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${meeting});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 5px;
`;

export default ImageGrid;
