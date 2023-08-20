import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";

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
    </>
  )
}

export default App
