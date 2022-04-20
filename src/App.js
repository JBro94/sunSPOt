
import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card';
import RouteCalculator from './components/routeCalculator';
import {Typography, Modal, Box} from '@mui/material';
import lots from './data/sunSPOtParking.json';

function App() {
  const [route, setRoute] = useState({});
  const [startLocale, setStartLocale] = useState(lots.features[1].geometry.coordinates);
  const [destLocale, setDestLocale] = useState(lots.features[0].geometry.coordinates);
  const [isRouteDisplayed, setIsRouteDisplay] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleStartChange = (e) => {
      setStartLocale(e.target.value);
  };

  const handleDestChange = (e) => {
      setDestLocale(e.target.value);
  };

  const handleRouteCalculation = async () => {
          const locales = `${startLocale[0]},${startLocale[1]};${destLocale[0]},${destLocale[1]}`;
          const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${locales}?geometries=geojson&access_token=pk.eyJ1Ijoiamxicm9rIiwiYSI6ImNsMXB1b3dxdzAxdzUzY3M2MzEwMjMxcWkifQ.Jis7AzQxUBN6clwg2WuGIQ`,
             { method: 'GET'}
          );
          const json = await query.json();
          const data = json.routes[0];
          const routeLine = {
              type: 'Feature',
              properties: {},
              geometry: {
                  type: 'LineString',
                  coordinates: data.geometry.coordinates
              }
          };
          setIsRouteDisplay(true);
          setOpen(true);
          let distance = data.distance * .00062137;
          let chargeTime = (distance/25)*60;
          setRoute(
            {
              start: startLocale,
              finish: destLocale,
              path: routeLine,
              chargeTime: chargeTime,
              distance: distance
            }
          );
          console.log('completed')
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  useEffect(() => {
      console.log(route);
      console.log(isRouteDisplayed);
    }, [route, isRouteDisplayed])

  return (     
    <div className="App">
      <header className="App-header">
        <div className='headerColumn'>
          <Card message={'sunSPOt Application'}/>
        </div>
        <div className='headerColumn'>
          <RouteCalculator 
            startLocale={startLocale} 
            destLocale={destLocale} 
            onStartChange={handleStartChange} 
            onDestChange={handleDestChange} 
            onRouteCalculation={handleRouteCalculation}
          />
        </div>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby = 'modal-modal-title'
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Route Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Distance: {route.distance} miles
            Time Required at Charge Station: {route.chargeTime} min
          </Typography>
        </Box>

      </Modal>
      <section>
        <Map
          displayRoute={isRouteDisplayed}
          route={route.path}
        />
      </section>
      <footer className='App-footer'>
        <Card message={'By: James Brokaw'}/>
      </footer>
    </div> 
  );
}
export default App;
