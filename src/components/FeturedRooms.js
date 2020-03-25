import React, { Component } from 'react';
import {RoomContext} from '../Context';

export default class FeturedRooms extends Component {
  static contextType = RoomContext
  render() {
    const {name, greeting} = this.context
    return (
      <div>
        Hello from FeturedRooms {name} {greeting}
      </div>
    )
  }
}
