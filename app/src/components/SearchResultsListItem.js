import React from 'react';

const SearchResultsListItem = ({location, onLocationSelect}) => { // location = props.location
  return (
    <li onClick={() => onLocationSelect(location)} className="search-results-list-item">
      {location.name}
    </li>
  );
}

export default SearchResultsListItem
