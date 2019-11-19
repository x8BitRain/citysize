import React from 'react';
import outlines from './outlines/outlines.js';
import axios from 'axios';
import flattenGeoJson from './functions/flattenGeoJson.js';

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  };

  handleClick = (e) => {
    this.props.addOutline(
      outlines[e.target.id].data, // City GeoJSON data
      outlines[e.target.id].name  // City name
      );
    //console.log(`%c${end - start}ms to render ${outlines[e.target.id].name} with ${outlines[e.target.id].data.geometry.coordinates[0].length} lat long coordinates.`, 'font-size:x-large');
  };

  handleSearchResultClick = (e) => {
    let resultValue = e.target.getAttribute('value'); //select matching search result based on value element in result html attribute
    console.log(resultValue);
    let selectedCityResult = this.state.searchResults.filter(function (ex) {
        return ex.place_id === parseInt(resultValue);
      });
    console.log(selectedCityResult);
    flattenGeoJson(selectedCityResult);

    this.props.addOutline(flattenGeoJson(selectedCityResult), 'test');
  };


  handleSearch = (e) => {
    if (e.target.value.length > 1) {
    axios.get(`https://nominatim.openstreetmap.org/search.php?q=${e.target.value}&polygon_geojson=1&format=json&limit=5`)
      .then(res => {
        let cityResults = res.data.filter(function (el) {
          //console.log(Boolean(el.geojson.type));
          if (el.geojson) {return el.geojson.type === 'MultiPolygon' ||
                                  el.geojson.type === 'Polygon'
          } else {
            return null; // avoid results not containing geojson.
          }; // only include search results that contain geojson polygons.
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

        <div id='searchResults'>
          {this.state.searchResults.map(elem => (
          <div className={'searchResult'} value={elem.place_id} onClick={this.handleSearchResultClick} key={elem.place_id}>
            <h2>{elem.display_name}</h2>
            <p>{elem.type}</p>
            <p>{elem.lat}</p>
            <p>{elem.lon}</p>
            <hr />
          </div>
        ))}
        </div>
      </div>
    );
  }
};

