import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { CM } from "../../DATA/companyData"; 
import L from 'leaflet'; 

import 'leaflet/dist/leaflet.css'; 
import './leaflet.css'
const MapComponent = () => {
  const [position, setPosition] = useState([13.7563, 100.5018]); 

  const locations = CM.flatMap(company =>
    company.DPCH.map(department => ({
      id: Math.random(),
      lat: department.DPLocation.lat,
      lng: department.DPLocation.lng,
      title: department.DPName,
      color: department.color,
    }))
  );


  return (
    <MapContainer
      center={position}
      zoom={13} 
      scrollWheelZoom={true} 
      style={{ width: '100%', height: '100%' }} 
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />


      {locations.map((loc) => {

        const icon = L.divIcon({
          className: 'custom-icon', 
          html: `<div class="marker" style="background-color:${loc.color};"></div>`, 
          iconSize: [30, 30], 
          iconAnchor: [15, 30], 
        });

        return (
          <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={icon}>
            <Popup>{loc.title}</Popup>
          </Marker>
        );
      })}

    </MapContainer>
  );
};

export default MapComponent;
