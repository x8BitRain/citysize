import React from "react";
import SearchResult from "./searchResult.jsx";
import outlines from "./outlines/outlines.js";
import axios from "axios";
import flattenGeoJson from "./functions/flattenGeoJson.js";

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      style: {}
    };
  }

  handleSearchResultClick = e => {
    let resultValue = e.getAttribute("value"); //select matching search result based on value element in result html attribute
    console.log(resultValue);
    let selectedCityResult = this.state.searchResults.filter(function(ex) {
      return ex.place_id === parseInt(resultValue);
    });
    console.log(selectedCityResult);
    flattenGeoJson(selectedCityResult);

    this.props.addOutline(flattenGeoJson(selectedCityResult), "test");
  };

  handleSearch = e => {
    console.log(e.target.value);
    if (e.target.value.length > 3) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search.php?q=${e.target.value}&polygon_geojson=1&format=json&limit=5`
        )
        .then(res => {
          let cityResults = res.data.filter(function(el) {
            //console.log(Boolean(el.geojson.type));
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
          if (this.state.searchResults.length > 1) {
              this.setState({
                style: { "padding-bottom": "15px" }
              })
            }

          console.log(this.state.searchResults);
        });
    } else if (e.target.value.length < 3) {
      this.setState({
        searchResults: [],
        style: { "padding-bottom": "0px" }
      });
    }
  };

  componentDidMount() {
    // console.log(this.refs.testing);
  }

  render() {
    let itemList = Object.entries(outlines).map(([key, value]) => {
      return (
        <button key={key} id={key} onClick={this.handleClick}>
          {value.name}
        </button>
      );
    });

    //{ itemList }
    return (
      <div id="interface">
        <div id="searchBox" style={this.state.style}>
          <input
            type="search"
            onChange={this.handleSearch}
            placeholder="Search"
          />
          <div id="searchIconContainer">
            <div id="searchIcon"></div>
          </div>
          <SearchResult
            returnResult={this.handleSearchResultClick}
            searchResults={this.state.searchResults}
          />
        </div>
      </div>
    );
  }
}
