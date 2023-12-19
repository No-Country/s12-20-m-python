import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import TreeIcon from '../../assets/treeDefault.png';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { useLand } from '../../context/LandContext';
import Loader from '../Loader/Loader';

const Map = ({ handleClick, placeFound }) => {
  //Argentina - Cordoba
  const MainLocation = {
    location: {
      lat: '-30.7630646',
      lng: '-64.785466',
    },
    zoom: 7,
  };
  const { location, zoom } = MainLocation;

  const { land, loading, error } = useLand();

  if (!land)
    return (
      <div className='mapLoaderContainer'>
        <Loader />
      </div>
    );

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
              <div>
                <p>Tipos de árboles disponibles para esta zona: </p>
                <ul className='typeList'>
                  {place.type_tree.map((type) => (
                    <li key={type.id}>{type.name}</li>
                  ))}
                </ul>
              </div>
              <div className='containerBtn'>
                <button
                  className='placeBtn'
                  onClick={() => {
                    handleClick();
                    placeFound(place.id);
                  }}
                >
                  Ver más
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
