import getRandomColor from './randomColor.js';
import addCityLayer from './addCityLayer.js';
import outlines from './outlines/outlines.js';

const addCityLayer = (thing) => {
    let param = thing.target.value;
    const mapInst = this.refs.map.leafletElement;
    let boundaryColor = getRandomColor();
    const trueSizeLayer = new L.trueSize(outlines[param].data, {
      markerDiv: `<h2>${thing.target.innerText}</h2>`,
      iconAnchor: [35, 35],
      fill: true,
      fillColor: boundaryColor[0],
      fillOpacity: 0.15,
      color: 'black',   //boundaryColor[1] is meant to be a
      weight: 3,        //darker version of the same random
      opacity: 1,       //color but black just looks nicer.
      stroke: true,
    }).addTo(mapInst);
  };

  export default addCityLayer;
