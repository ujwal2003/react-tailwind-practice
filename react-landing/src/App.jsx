import React from "react";

import Header from "./components/Header";

function App() {
  let navLinks = [
    {"name": "link-one", "url": "#"},
    {"name": "link-two", "url": "#"},
    {"name": "link-three", "url": "#"},
  ];

  return (
    <>
      <Header links={navLinks} />
    </>
  )
}

export default App
