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

  setCity = (city, lat, lon) => {
    theCityItself = city; // usng a variabe is a few ms faster than setting state, wtf?
    this.addCityLayer(city, lat, lon);
  }

  addCityLayer = (outline, lat, lon) => {
    const mapInst = this.refs.map.leafletElement;
    console.log(outline);
    //mapInst.flyToBounds([["1.2101324","103.6056259"],["1.4715641","104.0436413"]]);
    mapInst.flyTo([lat, lon], 4);
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
                  minZoom='2.5'
                  zoomSnap='0.25'
                  onClick={this.handleClick}
                  ref='map'
                  useFlyTo={true}
                  attributionControl={true} >
        <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/mapbox/light-v10"
            attribution={'© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | © <a href="https://www.mapbox.com/">MapBox</a>'}
          />
      </LeafletMap>
      <MapUI addOutline={this.setCity}  />
      </React.Fragment>
    );
  }
}

export default MapView
