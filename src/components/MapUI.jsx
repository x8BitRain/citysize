import React from 'react';
import outlines from './outlines/outlines.js';
import axios from 'axios';

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
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


  handleSearch = (e) => {
    if (e.target.value.length > 1) {
    axios.get(`https://nominatim.openstreetmap.org/search.php?q=${e.target.value}&polygon_geojson=1&format=json`)
      .then(res => {
        let cityResults = res.data.filter(function (el) {
          return el.geojson.type === 'MultiPolygon' || 'Polygon'; //only include search results that contain geojson polygons.
        });
        this.setState({ searchResults: cityResults });
        console.log(this.state.searchResults);
      })
    }
  };

  render() {

    let itemList = Object.entries(outlines).map(([key, value]) => {
      return(<button key={key} id={key} onClick={this.handleClick}>{value.name}</button>)
    });

    return (
      <div id='interface'>
        { itemList }
        <form>
          <input type='search' onChange={this.handleSearch} />
        </form>
      </div>
    );
  }
};

