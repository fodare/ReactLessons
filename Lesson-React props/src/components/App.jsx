import React from "react";
import Card from "./card";
import contacts from "../contacts.js";

function createCard(contact) {
   return (
      <Card
         key={contact.id}
         keyid={contact.id}
         name={contact.name}
         imgUrl={contact.imgURL}
         tel={contact.phone}
         mail={contact.email}
      />
   );
}

function App() {
   return (
      <div>
         <h1 className="heading">My Contacts</h1>
         {contacts.map(createCard)}
      </div>
   );
}

export default App;
