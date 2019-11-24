import React from 'react';
import { Map as LeafletMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-truesize';
import MapboxLayer from "./MapboxLayer.js";
import getRandomColor from './functions/randomColor.js';
import MapUI from './MapUI.jsx';


const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZGJlbGxidHIiLCJhIjoiY2p5dTF5OXltMDFrOTNjbWxqdjZ5NmV2MCJ9.kkIqnzU12LF90W8yr-jsJw";
let theCityItself = '';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.0,
      lng: 0.0,
      zoom: 3,
      selectedCity: '',
      focus: {}
    }
  };

  componentDidMount() {

  }

  setCity = (city, name) => {
    theCityItself = city; // usng a variabe is a few ms faster than setting state, wtf?
    this.addCityLayer(city, name);
  }

  addCityLayer = (outline, name) => {
    const mapInst = this.refs.map.leafletElement;
    let boundaryColor = getRandomColor();
    L.trueSize(outline, { // outlines[param].data
      markerDiv: `<h2>${outline.name}</h2>`,
      iconAnchor: [35, 35],
      fill: true,
      fillColor: boundaryColor[0],
      fillOpacity: 0.15,
      color: 'black',   //boundaryColor[1] is meant to be a
      weight: 3,        //darker version of the same random
      opacity: 1,       //color but black just looks nicer.
      stroke: true,
    }).addTo(mapInst);
  }

  handleClick = (e) => {
    console.log(e.latlng);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
    <React.Fragment>
      <LeafletMap center={position}
                  zoom={this.state.zoom}
                  zoomSnap='0.25'
                  onClick={this.handleClick}
                  ref='map' >
        <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/mapbox/light-v10"
          />
      </LeafletMap>
      <MapUI addOutline={this.setCity}  />
      </React.Fragment>
    );
  }
}

export default MapView
