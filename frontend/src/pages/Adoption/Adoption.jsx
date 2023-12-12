import Map from '../../components/Map/Map';
import { useState } from 'react';
import styles from './Adoption.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import TreePurchaseForm from '../../components/TreePurchaseForm/TreePurchaseForm';
import { useUser } from '../../context/UserContext';
import { useLand } from '../../context/LandContext';

const Adoption = () => {
  // const { user } = useContext(UserContext);
  const { user } = useUser();
  const { land } = useLand();

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
        <h2>{land.name}</h2>
        <SearchInput onSearch={handleSearch} />
        <p>Seleccioná un árbol y mirá donde estamos reforestando.</p>

        <Map
          mainLocation={mainLocation}
          places={places}
          handleClick={handleClick}
        />
      </div>
      <div className={styles.rigthcontainer}>
        
        {showDetail === true && (
          <div className={styles.loremtree}>
            <div>
            <h3>*Zona Elegida*</h3>
            <p>A los alrededores de la Laguna Rosales en Neuquén nos pusimos como objetivo sembrar 200 árboles de 3 especies de árboles nativos, Ñire (Nothofagus antarctica), Maitén (Maytenus boaria) y Coihue (Nothofagus dombeyi).</p>
            <p>Seleccioná el/los árbol/es que querés adoptar</p>
            </div>
            
            <TreePurchaseForm />
          </div>
          
        )}

        
      </div>
    </div>
  );
};

export default Adoption;