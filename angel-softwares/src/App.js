import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import ImageGrid from "./components/ImageGrid";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <ImageGrid />
    </>
  );
};

export default App;
