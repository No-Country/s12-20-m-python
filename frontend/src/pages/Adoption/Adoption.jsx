import Map from '../../components/Map/Map';
import { useState } from 'react';
import styles from './Adoption.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import TreePurchaseForm from '../../components/TreePurchaseForm/TreePurchaseForm';
import { useUser } from '../../context/UserContext';
import { useLand } from '../../context/LandContext';
import Map2 from '../../components/Map2/Map2';

const Adoption = () => {
  // const { user } = useContext(UserContext);
  const { user } = useUser();
  const { land, loading, error } = useLand();

  const handleSearch = (term) => {
    //lógica del buscador
    console.log(`Buscando: ${term}`);
  };

  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };
  const mainLocation = {
    location: {
      lat: '-32.607455',
      lng: '-63.850605',
    },
    zoom: 7,
  };

  const places = [
    {
      name: 'Calamuchita',
      trees: 'olmos, algarrobos, ñires',
      location: {
        lat: '-32.130287',
        lng: '-64.688381',
      },
    },
    {
      name: 'Punta del Agua',
      trees: 'cedros, álamos, espinillos',
      location: {
        lat: '-32.605444',
        lng: '-63.792494',
      },
    },
    {
      name: 'Carrilobo',
      trees: 'robles, álamos, lapachos',
      location: {
        lat: '-31.964673',
        lng: '-63.208347',
      },
    },
  ];

  return (
    <div className={styles.adoptioncontainer}>
      <div className={styles.leftcontainer}>
        <h1>Adopta un Árbol</h1>
        <h2>{user.name}</h2>
        <SearchInput onSearch={handleSearch} />
        <p>Seleccioná un árbol y mirá donde estamos reforestando.</p>

        <div>
          {loading ? (
            <p>Cargando datos...</p>
          ) : error ? (
            <div>{JSON.stringify(error)}</div>
          ) : (
            <div>Datos obtenidos</div>
          )}
        </div>

        <Map
          mainLocation={mainLocation}
          places={places}
          handleClick={handleClick}
        />
        <Map2 handleClick={handleClick} />

        <div className={styles.loremtree}>
          <h2>Lorem ipsum</h2>
          <h4>Tipos de árboles:</h4>
          <p>Arboles plantados</p>
        </div>
      </div>
      <div className={styles.rigthcontainer}>
        <h3>Zona elegida:</h3>
        {showDetail === true && (
          <div className={styles.whyadopt}>
            <h4>*Zona Elegida*</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Elegí tus árboles:</h3>
          </div>
        )}

        <TreePurchaseForm />
      </div>
    </div>
  );
};

export default Adoption;
