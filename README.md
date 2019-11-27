
# citysize (WIP)
An interactive map that lets you accurately compare geographic features like countries, cities, states and even buildings inspired by [thetruesize.com](https://thetruesize.com/) and powered by [nominatim.openstreetmap.org](http://nominatim.openstreetmap.org/).

## How it works
The search box only returns items from OSM Nominatim with GeoJSON polygon data, when you select a search entry the app with will convert the GeoJSON data into a basic outline it can be rendered to the map. The interactivity and the (mostly) accurate projection of the GeoJSON outlines on the map is possible with mapbox-gl-leaflet and leaflet-truesize.

## TODO
- REFACTOR, REFACTOR, REFACTOR.
- Add location stats UI, population, square meterage, etc.
- Add VS mode, to compare two places directly without having to drag them around.
- Add support for Mulitpolygon GeoJSON.
- Add support for pasting arbitrary GeoJSON data.
- Add GeoJSON simplification option.
- Add basic configuration settings, tileset theme, enable/disable FlyTo, etc.

## Bugs & Q&As
- **Larger GeoJSON objects (like Russia) don't render.**
  - Fixable by passing the polygon data through a minifier prior to render.
- **Some outlines duplicate when there are multiple outlines already on screen.**
  - Not sure why by it seems to be caused be excessive zooming.
- **Some regions (like Spain and Tokyo) are rendered as small islands or missing large regions.**
  - The ```flattenGeojson``` function only supports the first instance of a coordinates array in a GeoJSON, support for multipolygons is a TODO.
- **Dragging certain larger countries around is laggy.**
  - Fixable by passing through a GeoJSON minifier because translating 100,000+ points across a map in real time is hard.
- **Why is the search is funky?**
  - Turns out emulating Google search isn't that easy, I'm trying my best okay??
- **Why doesn't this specific exist when I search for it?**
  - It's either not on OpenStreetMap or it is but doesn't have any GeoJSON data with it.
  - [Example of a place with GeoJSON data](https://nominatim.openstreetmap.org/search.php?q=Singapore&polygon_geojson=1&format=geojson), the first result is a point where the point lays between two latitude and longitude points (can't be rendered as a shape), the second result contains polygon info under `"geometry": {"type": "Polygon",}` that effectively tells the map to connect the dots against the array of points.

## react-boilerplate / dependencies

Made on top of a create-react-app instance, depends on:
 - axios
 - leaflet
 - leaflet-truesize
- mapbox-gl
- mapbox-gl-leaflet
- node-sass
- react
- react-dom
- react-leaflet
- react-scripts

## Setup and Run

Clone this repository:

```git clone https://github.com/x8BitRain/citysize.git```  & ```cd citysize/```

Start the local Webpack Dev Server:

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and output static HTML and JS files:

```bash
webpack -p
```
