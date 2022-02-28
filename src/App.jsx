import React from 'react';
import "./App.scss";
import MathOper from './components/MathOper/MathOper';
import { useState } from "react";

const App = () => {
/*  const [user, setUser] = useState({
    firstName: "Sarita",
    lastName: "Kalyani",
  });
*/
 /* const handleSubmit = event => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };
*/

  return <div className="app">    
<MathOper title="Addition of numbers" />
  </div>;
};

export default App;
