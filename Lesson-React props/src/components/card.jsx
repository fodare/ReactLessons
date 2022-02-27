import React from "react";
import Arvatar from "./Arvatar";
import Info from "./Info";

function Card(props) {
   return (
      <div>
         <div className="card">
            <div className="top">
               <p>Id:{props.keyid}</p>
               <h2 className="name">{props.name}</h2>
               <Arvatar imgUrl={props.imgUrl} />
            </div>
            <Info tel={props.tel} mail={props.mail} />
         </div>
      </div>
   );
}

export default Card;
