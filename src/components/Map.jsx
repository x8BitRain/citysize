import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';



class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.0,
      lng: 0.0,
      zoom: 3
    }
  };

  componentDidMount () {
      const map = this.refs.theMap.leafletElement;
      console.log(map);
    }


  handleClick(e){
  console.log(e.latlng);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom} onClick={this.handleClick} ref={'theMap'} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}

export default MapView
