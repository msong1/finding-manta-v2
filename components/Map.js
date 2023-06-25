'use client'
import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup, } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coodrinates = searchResults.map(({ longitude, latitude }) => ({
    longitude,
    latitude
  }))
  const center = getCenter(coodrinates);
  return (
    <ReactMapGL
      initialViewState={{
        // longitude: -122.4376,
        // latitude: 37.7577,
        zoom: 7,
        ...center
      }}
      style={{ width: '100%', height: '90vh' }}
      cursor='grab'
      mapStyle="mapbox://styles/cosnim61/clj7u4tnm002n01rjdmqdamxa"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    >
      {searchResults.map(({ name, longitude, latitude }, index) => (
        <div key={index}>
          <Marker
            longitude={longitude}
            latitude={latitude}
            offset={[0, -5]}
          ><p
            className=' cursor-pointer text-2xl animate-bounce'
            onClick={() => setSelectedLocation(name)}
            aria-label='push-pin'>
              📍
            </p>
          </Marker>
          {/* Map pop-up */}
          {selectedLocation == name &&
            <Popup
              onClose={() => {setSelectedLocation({})}}
              closeOnClick={false}
              longitude={longitude}
              latitude={latitude}
              offset={[0, -5]}
            >
              {name}
            </Popup>
          }
        </div>
      ))
      }
    </ReactMapGL >

  )
}

export default Map