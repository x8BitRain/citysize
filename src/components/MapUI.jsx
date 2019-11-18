import React from 'react';
import outlines from './outlines/outlines.js';

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  handleClick = (e) => {
    let start = new Date().getTime();
    this.props.addOutline(
      outlines[e.target.id].data, // City GeoJSON data
      outlines[e.target.id].name  // City name
      );
    let  end = new Date().getTime();
    console.log(`%c${end - start}ms to render ${outlines[e.target.id].name} with ${outlines[e.target.id].data.geometry.coordinates[0].length} lat long coordinates.`, 'font-size:x-large');
  };

  render() {

    let itemList = Object.entries(outlines).map(([key, value]) => {
      return(<button key={key} id={key} onClick={this.handleClick}>{value.name}</button>)
    });

    return (
      <div id='interface'>
        { itemList }
      </div>
    );
  }
}

        // <button className={'mapUI'} value={'bali'} onClick={this.handleClick}>bali</button>
        // <button className={'mapUI'} value={'bali'} onClick={this.handleClick}>vilnius</button>
