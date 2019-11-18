import React from 'react';
import { Map as LeafletMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-truesize';
import MapboxLayer from "./MapboxLayer.js";
import getRandomColor from './randomColor.js';
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
      selectedCity: ''
    }
  };


  componentDidMount() {
    //let mapInst =  this.refs.map.leafletElement;
    //console.log(mapInst);
    //console.log(outlines.bali.data);
  }

  // setCity = (city) => {
  //   console.log(city);
  //   this.setState({
  //     selectedCity: city
  //   }, () => {
  //   console.log(this.state.selectedCity);
  //   });
  // }

  setCity = (city, name) => {
    theCityItself = city; // usng a variabe is a few ms faster than setting state, wtf?
    this.addCityLayer(city, name);
  }

  //this.state.selectedCity.data[thing.target.value[0]]

  addCityLayer = (outline, name) => {
    const mapInst = this.refs.map.leafletElement;
    let boundaryColor = getRandomColor();
    const trueSizeLayer = new L.trueSize(outline, { // outlines[param].data
      markerDiv: `<h2>${name}</h2>`,
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
      <MapUI addOutline={this.setCity} />
      </React.Fragment>
    );
  }
}

export default MapView

      // <div id='btns'>
      //   <button onClick={this.addCityLayer} value={'berlin'}>Berlin</button>
      //   <button onClick={this.addCityLayer} value={'new_york'}>New York City</button>
      //   <button onClick={this.addCityLayer} value={'vilnius'}>Vilnius</button>
      //   <button onClick={this.addCityLayer} value={'bali'}>Bali</button>
      // </div>
