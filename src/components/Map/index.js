import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
// import "./styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicHJpbmNlLXJhd2F0IiwiYSI6ImNsand5ZmwwaDA2eDEzZG12MjB0NmV5MDcifQ.Wz2ruCZ5RQJVK1Op4Fz04A";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
        image:
          "https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
        image: "https://docs.mapbox.com/mapbox-gl-js/assets/san-francisco.jpg"
      }
    }
  ]
};

export default function Mapbox() {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const mapContainerRef = useRef(null);

  const searchLocationAndCenter = () => {
    if (!location) return;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
      )}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.features && data.features.length > 0) {
          const centerCoordinates = data.features[0].geometry.coordinates;
          map.flyTo({ center: centerCoordinates, zoom: 10 });

          // Add the searched location to the geojson
          const feature = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: centerCoordinates
            },
            properties: {
              title: location,
              description: data.features[0].place_name,
              image:
                data.features[0].context[0]?.properties?.wikidata?.images[0]
            }
          };

          console.log(data.features);

          geojson.features.push(feature);
          setSearchResult(feature.properties);

          // Add marker for the searched location to the map
          const el = document.createElement("div");
          el.className = "marker";
          new mapboxgl.Marker(el)
            .setLngLat(centerCoordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
            )
            .addTo(map);
        } else {
          alert("Location not found!");
        }
      });
  };

  // Set up the map
  useEffect(() => {
    // Set up the map when the component is mounted
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-96, 37.8],
      zoom: 10
    });

    setMap(map);

    // Clean up the map instance when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <div className="App">
      <div id="searchBox">
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            height: '20px',
            border: '1px' ,
            borderRadius: "2px"
          }}
        />
        <button style={{
          color: 'whitesmoke',
          background: '#f75940',
          height: '2rem',
          width: '6rem',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          border: 'none',
          borderRadius: '20px',
          transition: '0.4s',
          cursor: 'pointer'
        }} onClick={searchLocationAndCenter}>Search</button>
      </div>
      {searchResult && (
        <div id="searchResult">
          <h3>{searchResult.title}</h3>
          <p>{searchResult.description}</p>
          {/* <img src={searchResult.image} alt={searchResult.title} /> */}
        </div>
      )}
      <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
}
