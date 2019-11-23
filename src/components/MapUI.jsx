import React from "react";
import SearchResult from "./searchResult.jsx";
//import outlines from "./outlines/outlines.js";
import axios from "axios";
import flattenGeoJson from "./functions/flattenGeoJson.js";

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultsStyle: {},
      searchResultsFocus: true,
      searchResults: [],
      style: {}
    };
  }

  handleSearchResultClick = e => {
    let resultValue = e.getAttribute("value"); //select matching search result based on value element in result html attribute
    let selectedCityResult = this.state.searchResults.filter(function(ex) {
      return ex.place_id === parseInt(resultValue);
    });
    flattenGeoJson(selectedCityResult);

    this.props.addOutline(flattenGeoJson(selectedCityResult));
  };

  handleSearch = e => {
    if (e.target.value.length > 3) {
      axios
        .get(`https://nominatim.openstreetmap.org/search.php?q=${e.target.value}&polygon_geojson=1&format=json&limit=5`)
        .then(res => {
          let cityResults = res.data.filter(function(el) {
            if (el.geojson) {
              return (
                el.geojson.type === "MultiPolygon" ||
                el.geojson.type === "Polygon"
              );
            } else {
              return null; // avoid results not containing geojson.
            } // only include search results that contain geojson polygons.
          });
          this.setState({ searchResults: cityResults });
          //adds 15px to the bottom of search results container for prettiness.
          if (this.state.searchResults.length > 0) {
              this.setState({
                style: { "paddingBottom": "10px" }
              })
            }
        });
    } else if (e.target.value.length < 3) {
      this.setState({
        searchResults: [],
        style: { "paddingBottom": "0px" }
      });
    }
  };

  collapseSearch = () => {

  };



  componentDidMount() {
    this.refs.searchbar.focus();
    // prevents form from refreshing page when hitting enter.
    this.refs.searchbar.onkeypress = function(e) {
      var key = e.charCode || e.keyCode || 0;
      if (key === 13) {
        e.preventDefault();
      }
    }
  }

  render() {

    return (
      <div onChange={this.handleSearch}
           // onMouseEnter={this.onResultsMouseFocus}
           // onMouseLeave={this.onResultsMouseFocus}
           // onFocus={this.onResultsFocus}
           id="interface">
        <div id="searchBox" style={this.state.style}>
          <input
            ref='searchbar'
            type="search"
            //onBlur={this.onResultsFocus}
            placeholder="Search locations, cities, countries, states..."
          />
          <div id="searchIconContainer">
            <div id="searchIcon"></div>
          </div>
          <div style={this.state.searchResultsStyle} id="searchResults">
            <SearchResult
              returnResult={this.handleSearchResultClick}
              searchResults={this.state.searchResults}
            />
          </div>
        </div>
      </div>
    );
  }
}
