import React from "react";
import './styles.css'

const HelloWorld = ({ amount }) => {
  return (
    <div className="hello-world">
       Your balance is <span className="hello-world__tech">{amount}!</span>
    </div>
  );
};

export default HelloWorld;