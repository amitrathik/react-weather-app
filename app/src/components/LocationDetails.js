import React from 'react'

const LocationDetail = ({location, conditions}) =>{
  if(!conditions){
    return <div/>
  }
  return (
    <div className="location-detail">
      <p>{conditions.weather}</p>
      <p>{conditions.temperature_string}</p>
    </div>
  )
}

export default LocationDetail;
