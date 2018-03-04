
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
}
