import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Map from './components/Map/Map';

function App() {
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
        lat: '-34.5898345',
        lng: '-58.4644084',
      },
    },
    {
      name: 'Place Two',
      location: {
        lat: '-34.547406',
        lng: '-58.5947558',
      },
    },
    {
      name: 'Place Three',
      location: {
        lat: '-34.6399712',
        lng: '-58.5347848',
      },
    },
  ];

  return (
    <>
      <h1>client</h1>

      <h2>Leaflet Map</h2>
      <Map mainLocation={mainLocation} places={places} />
      <Component1 />
      <Component2 />
    </>
  );
}

export default App;
