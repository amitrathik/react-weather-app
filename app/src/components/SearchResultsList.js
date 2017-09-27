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
  const showSuggestions = (props.showSuggestions ? '' : 'hide')
  return (
    <ul className={"search-results-list " + showSuggestions}>
      {SearchResultsListItems}
    </ul>
  )
}

export default SearchResultsList;
