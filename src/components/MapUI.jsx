import React from "react";
import SearchResult from "./searchResult.jsx";
import Loader from "./Loader.jsx";
import axios from "axios";
import flattenGeoJson from "./functions/flattenGeoJson.js";

export default class MapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchStyle: {'display': 'block'},
      focused: true,
      loading: false,
      style: {}
    };
  }

  handleSearchResultClick = e => {
    let resultValue = e.getAttribute("value"); //select matching search result based on value element in result html attribute
    let selectedCityResult = this.state.searchResults.filter(function(ex) {
      return ex.place_id === parseInt(resultValue);
    });
    //flattenGeoJson(selectedCityResult);
    this.props.addOutline(flattenGeoJson(selectedCityResult), selectedCityResult[0].lat, selectedCityResult[0].lon, selectedCityResult[0].boundingbox);
  };

  handleSearch = e => {
    if (e.target.value.match(/(type)/gm) && e.target.value.length > 10) {
      console.log('found geojson');
      // this.props.addOutline(flattenGeoJson(JSON.parse(e.target.value))); handle arbitrary geojson render
    };
    if (e.target.value.length > 3) {
      this.setState({
        loading:true
      });
      axios
        .get(`https://nominatim.openstreetmap.org/search.php?q=${e.target.value}&polygon_geojson=1&format=json&limit=5&polygon_threshold=0.0001`)
        .catch(function (error) {
          // handle error
          console.log(error);})
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
          this.setState({ searchResults: cityResults, loading:false });
        });
    } else if (e.target.value.length < 3) {
      this.setState({
        searchResults: [],
      });
    }
  };

  setFocus = (e) => {
    if (e.type === 'mouseenter') {
      this.setState({
        focused: true
      });
    } else if (e.type === 'mouseleave') {
      this.setState({
        focused: false
      });
    }
  }


  toggleUI = (e) => {
    if (e.type === 'blur' && this.state.focused === true) {
      this.focusInput();
    } else if (e.type === 'blur' && this.state.focused === false) {
      this.setState({
        searchStyle: {'display' : 'none'},
      });
    } else if (e.type === 'focus') {
      this.setState({
        searchStyle: {'display' : 'block'}
      });
    }
  }

  focusInput = () => {
    this.refs.searchbar.focus();
  }

  componentDidMount() {
    this.focusInput();
    // prevents form from refreshing page when hitting enter.
    this.refs.searchbar.onkeypress = function(e) {
      var key = e.charCode || e.keyCode || 0;
      if (key === 13) {
        e.preventDefault();
      }
    }
  }

  doThing = () => {

  }

  render() {

    return (

      <div onChange={this.handleSearch}
           onClick={this.collapseSearch}
           onMouseEnter={this.setFocus}
           onMouseLeave={this.setFocus}
           id="interface">
        <div id="searchBox"
           onMouseEnter={this.setFocus}
           style={this.state.style}>
          <input
            ref='searchbar'
            type="search"
            placeholder="Search locations, cities, countries, states..."
            onMouseEnter={this.setFocus}
            onBlur={this.toggleUI}
            onFocus={this.toggleUI}
            onClick={this.doThing}
          />
          <div id="searchIconContainer">
            <div id="searchIcon"></div>
          </div>
          <div id="searchResults" onMouseEnter={this.setFocus}  style={this.state.searchStyle}>
          {this.state.loading ? <Loader/> : null}
            <SearchResult
            onClick={this.focusInput}
              returnResult={this.handleSearchResultClick}
              searchResults={this.state.searchResults}
            />
          </div>
        </div>
      </div>
    );
  }
}
