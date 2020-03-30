import React from 'react';
import RoomList from './RoomList';
import RoomsFilter from './RoomsFilter';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';


function RoomsContainer({context}) {
  
  const {loading, sortedRooms, rooms} = context;

  if(loading) {
    return <Loading/>
  }

  return (<>
      
         <RoomsFilter rooms={rooms}/>
         <RoomList rooms={sortedRooms}/>
         </>
  )
}

export default withRoomConsumer(RoomsContainer);
