import React from "react";
import Contact from "./components/Contact";
import Description from "./components/Description";
import DevImage from "./components/DevImage";
import Economy from "./components/Economy";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";
import ImageGrid from "./components/ImageGrid";
import NavigationBar from "./components/NavigationBar";
import OpenAi from "./components/OpenAi";
import OurExpertise from "./components/OurExpertise";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <ImageGrid />
      <OurExpertise />
      <DevImage />
      <Description />
      <OpenAi />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
