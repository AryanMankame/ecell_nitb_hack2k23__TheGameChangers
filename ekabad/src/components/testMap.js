import React, { useState, useRef, useCallback } from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/src/directions';
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  'pk.eyJ1IjoiaGVucmlxdWVub2JyZSIsImEiOiJja3dkZ3c2YmoydzdhMzBvMGRtdWVnd3J2In0.xdCkUviv0yGpX-t8L7ZKQ'

const MapBox = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGVucmlxdWVub2JyZSIsImEiOiJja3dkZ3c2YmoydzdhMzBvMGRtdWVnd3J2In0.xdCkUviv0yGpX-t8L7ZKQ';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-79.4512, 43.6568],
zoom: 13
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);

  return (
    <div id="map"></div>
  )
}

export default MapBox