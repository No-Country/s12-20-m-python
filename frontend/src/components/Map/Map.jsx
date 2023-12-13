import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/treeDefault.png';

import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = ({ mainLocation, places, handleClick }) => {
  const { location, zoom } = mainLocation;


  const { land, loading, error } = useLand();

  const customIcon = L.icon({
    iconUrl: TreeIcon,
    iconSize: [24, 24],
  });

  /*  const handleClick = (name) => {
    alert(`click on ${name}`);
  }; */

  return (
    <MapContainer center={location} zoom={zoom} scrollWheelZoom={true}>
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
              <p>Tipos de árboles: {place.type_tree.map(type => type.name).join(", ")}</p>
              {/* <p>Latitud: {place.location.lat}</p>
              <p>Longitud: {place.location.lng}</p> */}
              <button onClick={(e) => handleClick(e)}>click</button>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
