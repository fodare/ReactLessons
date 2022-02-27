import React from "react";
import Login from "./Login";

var isLoggedIn = true;
var userIsRegistered = true;

function App() {
   return (
      <div className="container">
         <Login isRegistered={userIsRegistered} />
      </div>
   );
}

export default App;

// Tenary Operator
//   <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
// And Operator
//   currentTime < 1 && <h1 className="container">Go to sleep it's late</h1>
