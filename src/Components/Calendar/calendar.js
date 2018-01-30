
import React, { Component } from 'react';
import DateTime from 'react-datetime';
import './react-datetime.css';

const Calender = props => (
  <DateTime 
    open={props.isOpen}
    timeFormat={false} 
    onChange={e => props.handleDateChange(e)}
    value={props.value}
  />
);
export default Calender;
