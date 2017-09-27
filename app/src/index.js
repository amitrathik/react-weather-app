import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchForm from './components/SearchForm';
import SearchResultsList from './components/SearchResultsList';
import LocationDetails from './components/LocationDetails';
import {loadLocations,loadConditions} from './lib/utils';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      selectedLocation: null,
      conditions: null,
      showSuggestions : false
    };
  }

  // Use query string to get location suggestions
  handleLocationSearch(term){
    // toggle suggestion drop down
    this.setState({showSuggestions : true})
    // fetch locations
    return loadLocations(term)
      .then(locations => this.setState({locations}))
  }

  // Use lat & lon from selected locations and get conditions
  handleLocationSelect(location){
    // toggle suggestion drop down
    this.setState({showSuggestions : false})
    // fetch conditions
    return loadConditions(location)
      .then(conditions => this.setState({conditions}))
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          onSearchTermChange={term => this.handleLocationSearch(term)}
        />
        <SearchResultsList
          locations={this.state.locations}
          onLocationSelect={ (selectedLocation) => this.setState({
            selectedLocation : selectedLocation,
            conditions : this.handleLocationSelect(selectedLocation)
          })}
          showSuggestions={this.state.showSuggestions}
        />
        <LocationDetails
          location={this.state.selectedLocation}
          conditions={this.state.conditions}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
