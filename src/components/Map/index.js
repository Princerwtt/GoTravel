
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJpbmNlLXJhd2F0IiwiYSI6ImNsand5ZmwwaDA2eDEzZG12MjB0NmV5MDcifQ.Wz2ruCZ5RQJVK1Op4Fz04A';

const MapboxMap = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

    return () => {
      map.remove(); // Clean up the map instance when the component unmounts
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MapboxMap;
