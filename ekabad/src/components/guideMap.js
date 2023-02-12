import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A';
const GuideMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [20.4, 78.9],
      zoom: zoom
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
export default GuideMap;