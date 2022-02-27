// CHALLENGE: uncomment the code below and see the car stats rendered
import React, { useState } from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

// console.log(animals);

// const [cat, dog, bird] = animals; // Destructing an array
// // console.log(animal1.sound);

// const { name, sound } = cat; // Destructing an object
// console.log(sound);

// const { name = "Sparrow", sound = "defaultsound" } = bird; // How to give default value.
// console.log(name);

const [honda, tesla] = cars;

const {
   coloursByPopularity: hColour,
   speedStats: { hondaTopSpeed, hondaZeroToSixty },
} = honda;

const {
   coloursByPopularity: tColour,
   speedStats: { teslaTopSpeed, teslaZeroToSixty },
} = tesla;

const {
   coloursByPopularity: [teslaTopColour],
} = tesla;
const {
   coloursByPopularity: [hondaTopColour],
} = honda;

ReactDOM.render(
   <table>
      <tr>
         <th>Brand</th>
         <th>Top Speed</th>
      </tr>
      <tr>
         <td>{tesla.model}</td>
         <td>{teslaTopSpeed}</td>
         <td>{teslaTopColour}</td>
      </tr>
      <tr>
         <td>{honda.model}</td>
         <td>{hondaTopSpeed}</td>
         <td>{hondaTopColour}</td>
      </tr>
   </table>,
   document.getElementById("root")
);
