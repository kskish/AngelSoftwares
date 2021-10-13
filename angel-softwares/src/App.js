import React from "react";
import Description from "./components/Description";
import Economy from "./components/Economy";
import GlobalStyle from "./components/GlobalStyles";
import ImageGrid from "./components/ImageGrid";
import NavigationBar from "./components/NavigationBar";
import OurExpertise from "./components/OurExpertise";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <ImageGrid />
      <OurExpertise />
      <Description />
      <Economy />
    </>
  );
};

export default App;
