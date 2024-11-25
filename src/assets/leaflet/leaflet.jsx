import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CM } from "../../DATA/companyData";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './leaflet.css';

const MapComponent = ({ departmentLocation }) => {
  const defaultPosition = [13.7563, 100.5018]; // Default position (e.g., Bangkok)
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    if (departmentLocation) {
      setPosition([departmentLocation.lat, departmentLocation.lng]);
    }
  }, [departmentLocation]);

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
      zoom={departmentLocation ? 100 : 13}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '75%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((loc) => {
        const isHighlighted =
          departmentLocation &&
          loc.lat === departmentLocation.lat &&
          loc.lng === departmentLocation.lng;

        const icon = L.divIcon({
          className: 'custom-icon',
          html: `
            <div
              class="marker ${isHighlighted ? 'highlighted' : ''}"
              style="background-color:${loc.color};"
            >
              ${isHighlighted ? '<div class="triangle"></div>' : ''}
            </div>
          `,
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
