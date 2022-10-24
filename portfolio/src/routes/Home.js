import React, { useState } from "react";
// import me from "../assets/me.png";
import About from "./About";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <section className="home">
      <About />
      <Portfolio />
  
    </section>
  );
}

export default Home;