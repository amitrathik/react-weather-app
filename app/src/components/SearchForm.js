import React, {Component} from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = { term : ''}
  }

  render() {
   return (
     <form className="search-form">
        <input
          className="search-form-input"
          type="text"
          placeholder="Please enter a location"
          value={this.state.term}
          onChange={evt => this.onInputChange(evt.target.value) }
        />
     </form>
   );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchForm;
