
// user events presentation component

import React, { Component } from 'react';
import { store } from '../../index';
import { fetchAllEvents } from '../../actions/actionCreater';
import { connect } from 'react-redux';

class UserEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    
    store.subscribe(() => {
      this.setState({
        events: store.getState().allEvents
      });
    });
    
    render() {
      return (
        <div>
          {
            this.state.events.map(ev => {
              return <div className="user-events"><p>{ev}</p></div>;
            })
          }
        </div>
      );
  }
}
