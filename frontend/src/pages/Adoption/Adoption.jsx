import Map from '../../components/Map/Map';
import { useState } from 'react';
import styles from './Adoption.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useLand } from '../../context/LandContext';
import PlaceInfo from '../../components/PlaceInfo/PlaceInfo';

const Adoption = () => {
  const [place, setPlace] = useState(null);
  const { land, loading, error, setPurchase } = useLand();

  const handleSearch = (term) => {
    //lógica del buscador
    console.log(`Buscando: ${term}`);
  };

  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const placeFound = (id) => {
    const found = land.find((place) => place.id === id);
    setPlace(found);

    if (place && id !== place.id) setPurchase([]);
  };

  return (
    <div className={styles.adoptionContainer}>
      <div className={styles.leftAdoptionContainer}>
        <h1>Adopta un Árbol</h1>
        <SearchInput onSearch={handleSearch} />
        <p>Seleccioná un árbol y mirá donde estamos reforestando.</p>

        <Map handleClick={handleClick} placeFound={placeFound} />
      </div>
      <div className={styles.rightAdoptionContainer}>
        {/* {showDetail === true && (
          <div className={styles.loremtree}>
            <div>
              <h3> {places.land}</h3>
              <p>
                A los alrededores de la Laguna Rosales en Neuquén nos pusimos
                como objetivo sembrar 200 árboles de 3 especies de árboles
                nativos, Ñire (Nothofagus antarctica), Maitén (Maytenus boaria)
                y Coihue (Nothofagus dombeyi).
              </p>
              <p>Seleccioná el/los árbol/es que querés adoptar</p>
            </div>

            <TreePurchaseForm />
          </div>
        )} */}

        {showDetail && <PlaceInfo place={place} />}
      </div>
    </div>
  );
};

export default Adoption;