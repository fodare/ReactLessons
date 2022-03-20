import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
   let navigate = useNavigate();

   return (
      <div className="container">
         <h1>
            The page you are looking for does not exist. Please go back to where
            you came from
         </h1>
         <button
            onClick={() => {
               navigate("/");
            }}
            type="button"
            className="btn btn-secondary btn-lg"
         >
            Navigate Home
         </button>
      </div>
   );
}

export default PageNotFound;
