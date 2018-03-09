
import React from 'react';

const TextBox = props => (
    <input 
      className="form-control" 
      id={props.id} 
      type="text" 
      placeholder={props.placeholder}
      onChange={e => props.handleTextChange(e)}
      value={props.value}
    />
);

export default TextBox;
