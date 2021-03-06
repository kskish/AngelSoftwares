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
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/contact_us" exact>
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
