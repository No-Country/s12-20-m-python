import { MapContainer, Marker, Popup, TileLayer, Polygon } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/tree-icon.svg';

import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = ({ mainLocation, places }) => {
  const { location, zoom } = mainLocation;
  const purpleOptions = { color: 'purple' }
  const polygon = [
    [-34.5898345, -58.4644084],
    [-34.547406, -58.5947558],
    [-34.6399712, -58.5347848],
    
  ]
  const customIcon = L.icon({
    iconUrl: TreeIcon,
    iconSize: [24, 24],
  });

  const handleClick = (name) => {
    alert(`click on ${name}`);
  };

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Polygon pathOptions={purpleOptions} positions={polygon} />

      {places.map((place, idx) => {
        return (
          <Marker
            key={idx}
            position={place.location}
            icon={customIcon}
            // eventHandlers={{ click: () => handleClick(place.name) }}
          >
            <Popup>
              <h3>Planta un árbol aquí:</h3>
              <h4>{place.name}</h4>
              <p>Latitud: {place.location.lat}</p>
              <p>Longitud: {place.location.lng}</p>
              <button onClick={() => handleClick(place.name)}>click</button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
