import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/tree-icon.svg';

import 'leaflet/dist/leaflet.css';
import './Map2.css';
import { useLand } from '../../context/LandContext';

const Map2 = ({ handleClick }) => {
  const { land } = useLand();

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

      {land.map((place) => {
        return (
          <Marker
            key={place.id}
            position={place.get_coordinated}
            icon={customIcon}
            // eventHandlers={{ click: () => handleClick(place.name) }}
          >
            <Popup>
              <h4>Planta un árbol aquí:</h4>
              <h3>{place.place}</h3>
              <p>
                Tipos de árboles:{' '}
                {place.type_tree.map((type) => type.name).join(', ')}
              </p>

              <button onClick={(e) => handleClick(e)}>click</button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map2;
