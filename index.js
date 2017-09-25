const express = require('express')
const app = express()
const fetch = require('node-fetch');

// Location Search Endpoint for Autocomplete
app.get('/search/', function (req, res) {
  fetch(`http://autocomplete.wunderground.com/aq?query=${req.query.term}`)
  .then(function(results) {
    // decode response into json
    return results.json();
  }).then(function(results){
    // return response
    res.send(results);
  });
})

// Weather Conditions Endpoint for Location via Lat & Lon
app.get('/conditions/', function (req, res) {
  fetch(`http://api.wunderground.com/api/4aa9b0be40442149/conditions/q/${req.query.lat},${req.query.lon}.json`)
  .then(function(results) {
    // decode response into json
    return results.json();
  }).then(function(results){
    // return response
    res.send(results);
  });
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
