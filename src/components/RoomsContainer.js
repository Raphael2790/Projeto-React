import React from 'react';
import RoomList from './RoomList';
import RoomsFilter from './RoomsFilter';


export default function RoomsContainer() {
  return (
    <div>
      Hello from RoomsContainer
      <RoomsFilter/>
      <RoomList/>
   </div>
  )
}
