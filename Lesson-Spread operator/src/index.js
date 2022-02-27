import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/// ES6 spread opreator is like an array concatinator. Example below:

// spread operator with Arrays
// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Mango", "Banana", ...citrus];

// console.log(fruits);

// Spread Operator with Objects
const fullName = {
   fName: "Damilare",
   lName: "Folorunso",
};

const User = {
   id: 1,
   username: "BatMan007",
   ...fullName,
};
console.log(User);
