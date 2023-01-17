import React, { useState } from "react";
// import Card from "../components/Card";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const portfolioCards = [
    {
      title: "Inspire App",
      link: "https://github.com/vanessaroman/Inspirer-app",
      img: "https://user-images.githubusercontent.com/101853202/195270098-26fdce56-0fed-4f12-9ba0-b6ab65137d9a.png",
      description: "https://inspirer-app.herokuapp.com/",
    },
    {
        title: "What's it Like Out There? Weather App",
        link: "https://github.com/vanessaroman/whats-like-out-there",
        img: "https://i.postimg.cc/y8CNQmmP/Screen-Shot-2022-10-04-at-10-54-51-PM.png",
        description: "",
      },
      {
        title: "The Feed App",
        link: "https://github.com/noellerjd/Food-Blog",
        img: "https://i.postimg.cc/yxrL66P1/68747470733a2f2f692e706f7374696d672e63632f4b597779675042382f53637265656e2d53686f742d323032322d30382d.png",
        description: "https://the-feed-app.herokuapp.com/0",
      },
      {
        title: "This is Random App",
        link: "https://github.com/rzaramba/this-is-random",
        img: "https://i.postimg.cc/qqRdZRq4/this-is-random-1.png",
        description: "https://rzaramba.github.io/this-is-random/",
      },
      {
        title: "Note Taker App",
        link: "https://github.com/vanessaroman/note-taker-app",
        img: "https://i.postimg.cc/m2NT2t1Z/SS-1-1.png",
        description: "",
      },
      {
        title: "Password Generator App",
        link: "https://github.com/vanessaroman/password-generator",
        img: "https://i.postimg.cc/Wb45tyhD/screenshot-1-1.png",
        description: "https://vanessaroman.github.io/password-generator/",
      },
  ];
  
  function Portcards() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
  }


  // function Portcards() {
  //   return (
  //     <section>
  //       <div className="project-container">
  //         {portfolioCards.map((proj, i) => {
  //           return (
  //             <Card key={i} title={proj.title} link={proj.link} img={proj.img} />
  //           );
  //         })}
  //       </div>
  //     </section>
  //   );
  // }
  
  export default Portcards;