import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import "../styles/Title.css"

function Title() {
  return (
    <h1 style={{fontWeight: 'bold', fontSize: 70,}}>
      <span>Vanessa</span> <span>Roman</span>
    </h1>
  );
}

export default Title;