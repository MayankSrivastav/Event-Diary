import React, { Component } from 'react';
import Calender from '../Calender/calender';
import Button from '../Button/button';
import TextBox from '../TextBox/textbox';
import { store } from '../../index';
import { createEvent } from '../../actions/actionCreater';
import { connect } from 'react-redux';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
}

handleTextChange(event) {
   this.setState({ text: event.target.value });
}
