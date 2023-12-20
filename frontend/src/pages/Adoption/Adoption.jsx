import Map from '../../components/Map/Map';
import SiembraImg from '../../assets/tree-amico.png';
import { useState, useEffect } from 'react';
import styles from './Adoption.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useLand } from '../../context/LandContext';
import PlaceInfo from '../../components/PlaceInfo/PlaceInfo';

const Adoption = () => {
  

  const [place, setPlace] = useState(null);
  const { land, setPurchase } = useLand();

  useEffect(() => {
    
    localStorage.setItem('purchaseData', JSON.stringify([]));
    setPurchase([]);  
  },[])
  

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
      <section className={styles.adoptionContainerHeader}>
        <h1>Adoptá un Árbol</h1>
        <SearchInput onSearch={handleSearch} />
        <p>
          Seleccioná un árbol en el mapa para obtener más información sobre la
          zona donde estamos reforestando.
        </p>
      </section>
      <div className={styles.adoptionContent}>
        <div className={styles.leftAdoptionContainer}>
          <Map handleClick={handleClick} placeFound={placeFound} />
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightAdoptionContainer}>
            {showDetail ? (
              <PlaceInfo place={place} />
            ) : (
              <section className={styles.defaultInfo}>
                <h3>¡Planta esperanza adoptando un árbol!</h3>
                <p>
                  Con tu compromiso, puedes marcar la diferencia en la lucha
                  contra la deforestación. Adopta un árbol y sé testigo de cómo
                  florece, purifica el aire y protege nuestro entorno. ¡Juntos,
                  podemos crear un mundo más verde y saludable para todos!
                </p>
                <img src={SiembraImg} alt='imagen siembra de árbol' />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption;
