import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import PropTypes from "prop-types";
import { GridLayer, withLeaflet } from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
  createLeafletElement(props) {
    return L.mapboxGL(props);
  }
}

/*
* Props are the options supported by Mapbox Map object
* Find options here:https://www.mapbox.com/mapbox-gl-js/api/#new-mapboxgl-map-options-
*/
MapBoxGLLayer.propTypes = {
  accessToken: PropTypes.string.isRequired,
  style: PropTypes.string
};

MapBoxGLLayer.defaultProps = {
  style: "mapbox://styles/mapbox/streets-v9"
};

export default withLeaflet(MapBoxGLLayer);
