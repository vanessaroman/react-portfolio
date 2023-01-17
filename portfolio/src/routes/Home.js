import React, { useState } from "react";
// import me from "../assets/me.png";
import About from "./About";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <section className="home">
      <div style={{height: 300}}>

        <h1 style={{fontSize: 100, color:'lavenderblush', paddingTop: 50}}> Vanessa Roman</h1>

      </div>

      <About />
      <Portfolio />
  
    </section>
  );
}

export default Home;