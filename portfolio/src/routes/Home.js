import React, { useState } from "react";
// import me from "../assets/me.png";
import About from "./About";
// import Portfolio from "./Portfolio";
import Title from "./Title";

function Home() {
  return (
    <section className="home">
      <div style={{height: 200}}>

      <Title />
        {/* <h1 style={{fontSize: 70, color:'lavenderblush', paddingTop: 50}}> Vanessa Roman</h1> */}

      </div>


      <About />
      
  
    </section>
  );
}

export default Home;