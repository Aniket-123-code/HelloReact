import React from 'react';
import ReactDOM from 'react-dom';

const name = "Aniket";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <div>
  <h1>
  Hello, my name is {name}</h1>
  <p>Current date is = {currDate}</p>
  <p>Current time  is = {currTime}</p>

  </div>,
  document.getElementById("root")
);


