import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Contact/> */}
      <Body/>
      <Footer />
    </div>
  );
};

export default App;
