import React from 'react';
import Title from '../components/Title';
import {useContext} from 'react';
import {RoomContext} from '../Context';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,
    breakfast,pets} = context;

  let types = getUnique(rooms,'type');

  types = ['all',...types]

  types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let capacities = getUnique(rooms,'capacity');

  capacities = capacities.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" value={type} className="form-control"
          onChange={handleChange}>
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" value={capacity} className="form-control"
          onChange={handleChange}>
            {capacities}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
            <input type="range" name="price" id="price" min={minPrice}
            max={maxPrice} className="form-control" value={price} 
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" 
            value={minSize} className="size-input" 
            onChange={handleChange}/>
            <input type="number" name="maxSize" id="size" 
            value={maxSize} className="size-input" 
            onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast"
            checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets"
            onChange={handleChange} checked={pets}/>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
