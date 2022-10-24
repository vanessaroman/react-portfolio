import React, { useState } from "react";

export default function Contact() {

    return (
<form>
    <h2>Get in Touch!</h2>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Any questions?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

 );
}