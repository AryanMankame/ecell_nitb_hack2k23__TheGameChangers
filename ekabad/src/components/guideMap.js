import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions';
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A';
const GuideMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
      alternatives: false,
      geometries: 'geojson',
      controls: { instructions: false },
      flyTo: false
    });
    
    map.addControl(directions, 'top-right');
    map.scrollZoom.enable();
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
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