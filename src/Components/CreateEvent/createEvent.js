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
  
  handleTextChange(event) {
   this.setState({ text: event.target.value });
  }

// DateTime onChange callback 
  // recieves the Date object
  handleDateChange(value) {
    this.setState({ date: value.toString() });
  }
  
  onClick() {
    const event = `${this.state.date} : ${this.state.text}`;
    store.dispatch(createEvent(event));
  }
  
  render() {
    return (
      <section className="create-events text-left">
        <TextBox 
          id="txt-event-name" 
          placeholder="Your event name"
          handleTextChange={this.handleTextChange}
          value={this.state.text} 
        />
        <Calender
          isOpen={true} 
          value={this.state.date}
          handleDateChange={this.handleDateChange}
        />
        <Button 
          id="btn-create-event" 
          name="Create event" 
          onClick={this.onClick}
        />
      </section>
    );
  }
}

}

