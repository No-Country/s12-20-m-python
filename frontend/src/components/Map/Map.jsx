import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/treeDefault.png';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import { useLand } from '../../context/LandContext';

const Map = ({ handleClick, placeFound }) => {
  //Argentina
  const testMainLocation = {
    location: {
      lat: '-38.7630646',
      lng: '-68.785466',
    },
    zoom: 4,
  };
  const { location, zoom } = testMainLocation;

  const { land, loading, error } = useLand();

  if (!land) return <div>Cargando Datos...</div>;

  const customIcon = L.icon({
    iconUrl: TreeIcon,
    iconSize: [24, 24],
  });

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {land.map((place) => {
        return (
          <Marker
            key={place.id}
            position={place.get_coordinated}
            icon={customIcon}
          >
            <Popup>
              <h4>Planta un árbol aquí:</h4>
              <h3>{place.place}</h3>
              <p>
                Tipos de árboles:{' '}
                {place.type_tree.length < 1
                  ? 'árbol 1, árbol 2, árbol 3'
                  : place.type_tree.map((type) => type.name).join(', ')}
              </p>
              <button
                onClick={() => {
                  handleClick();
                  placeFound(place.id);
                }}
              >
                click
              </button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
