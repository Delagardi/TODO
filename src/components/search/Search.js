import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }
  }
  onSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({
      term: searchTerm
    });
    this.props.onSearchChange(searchTerm);
  }
  render() {
    return <input 
            className="form-control search-input"
            value={this.state.term}
            onChange={this.onSearchChange}
            placeholder="Search here"/>
  }
}
