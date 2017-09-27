// fetch location suggestions and return results
export const loadLocations = (term) => {
  return fetch(`http://localhost:3000/search/?term=${term}`)
    .then(res => res.json())
    .then(res => res['RESULTS'])
}
// fetch conditions and return current observation
export const loadConditions = (location) => {
  return fetch(`http://localhost:3000/conditions/?lat=${location.lat}&lon=${location.lon}`)
    .then(res => res.json())
    .then(res => res['current_observation'])
}
