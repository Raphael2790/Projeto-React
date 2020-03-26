import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';


export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      slug:this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = RoomContext;

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug)
    if(!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      )
    }
    const {name,price,breakfast,description,capacity,size,extras,
    pets,images} = room
    return (
      <div>
        Hello from single room page {room.name}
      </div>
    )
  }
}
