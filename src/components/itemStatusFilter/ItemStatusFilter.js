import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
  
  render() {
    const { onWhatClicked } = this.props;
    console.log('THIS.PROPS:');
    console.log(this.props);

    return (
      <div className="btn-group">
        <button 
          id='all'
          className="btn btn-info"
          onClick={onWhatClicked}>All</button>
        <button 
          id="activeItems"
          className="btn btn-outline-secondary"
          onClick={onWhatClicked}>Active</button>
        <button
          id="important" 
          className="btn btn-outline-secondary"
          onClick={onWhatClicked}>Important</button>
        <button
          id="done" 
          className="btn btn-outline-secondary"
          onClick={onWhatClicked}>Done</button>
      </div>
    );
  }
}