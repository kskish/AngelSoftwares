import React from "react";
import Contact from "./Contact";
import Description from "./Description";
import DevImage from "./DevImage";
import ImageGrid from "./ImageGrid";
import OpenAi from "./OpenAi";
import OurExpertise from "./OurExpertise";

const Homepage = () => {
  return (
    <>
      <ImageGrid />
      <OurExpertise />
      <DevImage />
      <Description />
      <OpenAi />
      <Contact />
    </>
  );
};

export default Homepage;
