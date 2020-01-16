let geojsonHeader = {
  type: "Feature",
  name: "",
  bbox: [],
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
  console.log(polygon[0].geojson.coordinates);
  // MultiPolygons GeoJSONs have another layer of depth so
  // this changes polygonIndex to the appriate array depth.
  if (polygon[0].geojson.type === 'MultiPolygon') {
    polygonIndex = polygon[0].geojson.coordinates[0][0];
  } else if (polygon[0].geojson.type === 'Polygon') {
    polygonIndex = polygon[0].geojson.coordinates[0];
  }
  geojsonHeader.geometry.coordinates[0] = polygonIndex;
  geojsonHeader.name = polygon[0].display_name.split(',')[0];
  geojsonHeader.bbox = polygon[0].boundingbox;

  return(geojsonHeader);
}

export default flattenGeoJson;


