import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Quote from "./components/Quote";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
  let navLinks = [
    {"name": "link-one", "url": "#"},
    {"name": "link-two", "url": "#"},
    {"name": "link-three", "url": "#"},
  ];

  return (
    <>
      <Header links={navLinks} />
      <Hero />
      <Info />
      <Quote />
      <Action />
      <Footer />
    </>
  )
}

export default App
