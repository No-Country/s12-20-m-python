import Map from '../../components/Map/Map';
import { useState } from 'react';
import styles from '../Home/Home.module.css';

const Adoption = () => {
const [showDetail, setShowDetail]= useState(false)

    const handleClick = () => {
   setShowDetail(true)
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
        <>
          <h1>client</h1>
          <h2>Leaflet Map</h2>
          <Map mainLocation={mainLocation} places={places} handleClick={handleClick}/>
          {showDetail===true && 
          <div className={styles.whyadopt}>
            <h4>Selection Zone</h4>
            <p>Acá se selecciona los árboles a adoptar</p>
            </div>}
        </>
      );
    }
    


export default Adoption


