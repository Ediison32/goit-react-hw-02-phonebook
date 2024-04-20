import React, { Component } from 'react';

class Notifications extends Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

export default Notifications;