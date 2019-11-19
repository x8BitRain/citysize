let geojsonHeader = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [

      ]
    ]
  }
};

let polygonIndex;

const flattenGeoJson = (polygon) => {

  console.log('polygon ');
  console.log(polygon[0]);

  console.log('template ');
  console.log(geojsonHeader);

  if (polygon[0].geojson.type === 'MultiPolygon') {
    console.log("THIS IS MultiPolygon");
    polygonIndex = polygon[0].geojson.coordinates[0][0];
  } else if (polygon[0].geojson.type === 'Polygon') {
    polygonIndex = polygon[0].geojson.coordinates[0];
  }

  geojsonHeader.geometry.coordinates[0] = polygonIndex;

  console.log("merged");
  console.log(geojsonHeader);


  return(geojsonHeader);
}

export default flattenGeoJson;


