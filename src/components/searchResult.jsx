import React, { Component } from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => {
    this.props.returnResult(e.target);
  }

  render() {
    return (
      <div id="searchResults">
        {this.props.searchResults.map(elem => (
          <div
            className={"searchResult"}
            value={elem.place_id}
            onClick={this.handleClick}
            key={elem.place_id}>
            <h4>{elem.display_name}</h4>
            <p>{elem.type}</p>
            <p>{elem.lat}</p>
            <p>{elem.lon}</p>

          </div>
        ))}
      </div>
    );
  }
}


