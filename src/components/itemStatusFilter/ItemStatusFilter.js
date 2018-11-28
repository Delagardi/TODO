import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'active', label: 'Active'},
      {name: 'important', label: 'Important'},
      {name: 'done', label: 'Done'}
    ]
  }
  
  render() {
    const { filterToggle, onWhatClicked } = this.props;

    const buttons = this.buttons.map( ({ name, label }) => {
      const isActive = filterToggle === name;
      const classFilter = isActive ? 'btn-info' : 'btn-outline-secondary'

      return (
        <button
          key={name}
          type="button"
          className={`btn ${classFilter}`}
          onClick={() => onWhatClicked(name)}>{label}</button>
      )
    });
    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}