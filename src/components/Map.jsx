import React from 'react';
import { Map as LeafletMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-truesize';
import MapboxLayer from "./MapboxLayer.js";
import getRandomColor from './randomColor.js';

import berlin from './outlines/berlin.js';
import new_york from './outlines/new_york.js';
import vilnius from './outlines/vilnius.js';


const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZGJlbGxidHIiLCJhIjoiY2p5dTF5OXltMDFrOTNjbWxqdjZ5NmV2MCJ9.kkIqnzU12LF90W8yr-jsJw";
const cities = [berlin, new_york]

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.0,
      lng: 0.0,
      zoom: 3,
      cityNum: 0, //selected city number id idk
      selectedCity: {
        data: [berlin, new_york, vilnius],
      }
    }
  };


  componentDidMount() {
    let mapInst =  this.refs.map.leafletElement;
    console.log(mapInst);
    console.log();
  }

  addCityLayer = (thing) => {
    const mapInst = this.refs.map.leafletElement;
    let boundaryColor = getRandomColor();
    const trueSizeLayer = new L.trueSize(this.state.selectedCity.data[thing.target.value[0]], {
      markerDiv: `<h2>${thing.target.innerText}</h2>`,
      iconAnchor: [35, 35],
      fill: true,
      fillColor: boundaryColor[0],
      fillOpacity: 0.15,
      color: boundaryColor[1],
      weight: 3,
      opacity: 1,
      stroke: true,
    }).addTo(mapInst);
  }


  handleClick(e){
  console.log(e.latlng);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
    <React.Fragment>
      <LeafletMap center={position} zoom={this.state.zoom} onClick={this.handleClick} ref='map' >
        <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/mapbox/light-v10"
          />
      </LeafletMap>
      <div id='btns'>
        <button onClick={this.addCityLayer} value={0}>Berlin</button>
        <button onClick={this.addCityLayer} value={1}>New York City</button>
        <button onClick={this.addCityLayer} value={2}>Vilnius</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MapView
