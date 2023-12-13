import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/treeDefault.png';

import 'leaflet/dist/leaflet.css';
import './Map2.css';
import { useLand } from '../../context/LandContext';
import { useState } from 'react';

const Map2 = ({ handleClick }) => {
  const { land } = useLand();
  const [selectedPlace, setSelectedPlace] = useState(null);

  if (!land) return <div>Cargando Mapa...</div>;

  const { get_coordinated: location } = land[0];

  const customIcon = L.icon({
    iconUrl: TreeIcon,
    iconSize: [24, 24],
  });

  /*  const handleClick = (name) => {
    alert(`click on ${name}`);
  }; */

  return (
    <MapContainer center={location} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {/*   <Polygon pathOptions={purpleOptions} positions={polygon} /> */}

      {land.map((places) => {
        return (
          <Marker
            key={places.id}
            position={places.get_coordinated}
            icon={customIcon}
            eventHandlers={{ click: () => setSelectedPlace(places.id) }}
          >
            <Popup>
              <h4>Planta un árbol aquí:</h4>
              <h3>{places.places}</h3>
              <p>
                Tipos de árboles:{' '}
                {places.type_tree.map((type) => type.name).join(', ')}
              </p>

              <button onClick={() => handleClick(/* pass necessary data */)}>
                click
              </button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map2;
