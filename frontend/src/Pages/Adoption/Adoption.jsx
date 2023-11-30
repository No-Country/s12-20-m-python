import SecondMap from '../../components/Component1/SecondMap';
import Component2 from '../../components/Component2/Component2';
import Map from '../../components/Map/Map';

const Adoption = () => {
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
          location: {
            lat: '-34.5900000',
            lng: '-58.4900000',
          },
        },
        {
          name: 'Place Two',
          location: {
            lat: '-34.6000',
            lng: '-58.547558',
          },
        },
        {
          name: 'Place Three',
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
          <Map mainLocation={mainLocation} places={places} />
        <SecondMap />
          <Component2 />
        </>
      );
    }
    


export default Adoption


