
// filter multipolygons
var newArray = json.filter(function (el) {
  return el.geojson.type === 'MultiPolygon';
});
