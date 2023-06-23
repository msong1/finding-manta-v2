'use client'
import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  return (
      <ReactMapGL
        initialViewState={{
          longitude: -122.4376,
          latitude: 37.7577,
          zoom: 8
        }}
        style={{ width: '100%', height: '90vh' }}
        cursor='grab'
        mapStyle="mapbox://styles/cosnim61/clj7u4tnm002n01rjdmqdamxa"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      />
  )
}

export default Map