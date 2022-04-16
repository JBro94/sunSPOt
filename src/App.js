
import React, { Component } from 'react';
import './App.css';
import Map from './components/map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/badge';
import RouteCalculator from './components/RouteCalculator';



class App extends Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerColumn'>
          <Card message={'sunSPOt Application'}/>
        </div>
        <div className='headerColumn'>
          <RouteCalculator />
        </div>
      </header>
      <section>
        <Map />
      </section>
      <footer className='App-footer'>
        <Card message={'By: James Brokaw'}/>
      </footer>
    </div>
  );
  }
}

export default App;
