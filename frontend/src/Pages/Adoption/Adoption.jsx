import Map from '../../components/Map/Map';
import { useState } from 'react';
import styles from './Adoption.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import TreePurchaseForm from '../../components/TreePurchaseForm/TreePurchaseForm';

const Adoption = () => {
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
      lat: '-34.5694991',
      lng: '-58.591387',
    },
    zoom: 11,
  };

  const places = [
    {
      name: 'Place One',
      trees: 'pinos, algarrobos, ñires',
      location: {
        lat: '-34.5900000',
        lng: '-58.4900000',
      },
    },
    {
      name: 'Place Two',
      trees: 'cedros, álamos, espinillos',
      location: {
        lat: '-34.6000',
        lng: '-58.547558',
      },
    },
    {
      name: 'Place Three',
      trees: 'robles, álamos, lapachos',
      location: {
        lat: '-34.6199712',
        lng: '-58.5347848',
      },
    },
  ];

  return (
    <div className={styles.adoptioncontainer}>
      <div className={styles.leftcontainer}>
        <h1>Adopta un Árbol</h1>
        <SearchInput onSearch={handleSearch} />
        <p>Seleccioná un árbol y mirá donde estamos reforestando.</p>

        <Map
          mainLocation={mainLocation}
          places={places}
          handleClick={handleClick}
        />
        {showDetail === true && (
          <div className={styles.whyadopt}>
            <h4>Selection Zone</h4>
            <p>Acá se selecciona los árboles a adoptar</p>
          </div>
        )}
        <div className={styles.loremtree}>
          <h2>Lorem ipsum</h2>
          <h4>Tipos de árboles:</h4>
          <p>Arboles plantados</p>
        </div>
      </div>
      <div className={styles.rigthcontainer}>
        <h2>Zona elegida por el usuario</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          dignissimos debitis ea perferendis iste doloremque nisi corporis
          aspernatur non culpa, recusandae mollitia tenetur ut nostrum aut eos
          possimus pariatur odio.
        </p>
        <TreePurchaseForm />
      </div>
    </div>
  );
};

export default Adoption;
