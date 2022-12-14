import React from "react";

export default function Card(props) {
  return (
    <div className="project-card">
      <a href={props.link} alt={props.title} target="_blank" rel="noreferrer">
      <h1>{props.title}</h1>
        <img className="card-img" src={props.img} alt={props.title}></img>
        <a href={props.description} alt="Deployed App" target="_blank" rel="noreferrer">Deployed App Here</a>
      </a>
      <br></br>
    </div>
  );
}