import React from "react";  

const Button = props => (
  <button 
    id="btn-create-event"
    onClick={props.onClick} 
    className="btn btn-success">
    {props.name}    
  </button>
);
