import React from 'react'
import { Map as LeafletMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-truesize';
import MapboxLayer from "./MapboxLayer.js";
import berlin from './outlines/berlin.js';
import new_york from './outlines/new_york.js';

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
        data: [berlin, new_york],
      }
    }
  };


  componentDidMount() {
    let mapInst =  this.refs.map.leafletElement;
    console.log(mapInst);
  }

  addCityLayer = (thing) => {
    const mapInst = this.refs.map.leafletElement;

    const trueSizeLayer = new L.trueSize(this.state.selectedCity.data[thing.target.value], {
      color: '#FF0000',
      weight: 1,
      opacity: 1,
      dashArray: '7, 10',
    }).addTo(mapInst);
    console.log(trueSizeLayer);
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
            style="mapbox://styles/mapbox/streets-v9"
          />
      </LeafletMap>
      <div id='btns'>
        <button onClick={this.addCityLayer} value={0}>berlin</button>
        <button onClick={this.addCityLayer} value={1}>nyc</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MapView
