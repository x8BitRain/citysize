import React from 'react';
import capitalize from './functions/capitalize.js';

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
      <React.Fragment>
        {this.props.searchResults.map(elem => (
          <div
            className={"searchResult"}
            value={elem.place_id}
            onClick={this.handleClick}
            key={elem.place_id}>
            <h4>{elem.display_name}</h4>
            <p>Border Type: {capitalize(elem.type)}</p>
            <p>{elem.lat}</p>
            <p>{elem.lon}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}


