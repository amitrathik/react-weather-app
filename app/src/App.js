import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import SearchResultsList from './components/SearchResultsList';
import LocationDetails from './components/LocationDetails';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      selectedLocation: null,
      conditions: null
    };
  }

  handleLocationSearch(term){
    return fetch(`http://localhost:3000/search/?term=${term}`)
      .then((res) => res.json())
      .then((res) => this.setState({locations : res['RESULTS']}))
  }

  handleLocationSelect(location){
    return fetch(`http://localhost:3000/conditions/?lat=${location.lat}&lon=${location.lon}`)
      .then((res) => res.json())
      .then((res) => this.setState({conditions : res['current_observation']}))
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          onSearchTermChange={term=> this.handleLocationSearch(term)}
        />
        <SearchResultsList
          locations={this.state.locations}
          onLocationSelect={(selectedLocation) => this.setState({
            selectedLocation : selectedLocation,
            conditions : this.handleLocationSelect(selectedLocation)
          })}
        />
        <LocationDetails
          location={this.state.selectedLocation}
          conditions={this.state.conditions}
        />
      </div>
    );
  }
}

export default App;
