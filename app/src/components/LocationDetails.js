import React from 'react'

const LocationDetail = ({location, conditions}) =>{
  if(!location || !conditions){
    return <div className="location-detail">Please enter a city to get weather conditions</div>;
  }
  return (
    <div className="location-detail">
      <h3>{location.name}</h3>
      <img src={conditions.icon_url} alt={conditions.icon}/>
      <p>{conditions.weather}</p>
      <p>{conditions.temperature_string}</p>
    </div>
  )
}

export default LocationDetail;
