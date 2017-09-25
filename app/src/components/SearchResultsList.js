import React from 'react'
import SearchResultsListItem from './SearchResultsListItem';

const SearchResultsList = (props) => {
  const SearchResultsListItems = props.locations.map( (location,index) => {
    return (
      <SearchResultsListItem
        key={index}
        location={location}
        onLocationSelect={props.onLocationSelect}
      />
    )
  })
  return (
    <ul className="search-results-list">
      {SearchResultsListItems}
    </ul>
  )
}

export default SearchResultsList;
