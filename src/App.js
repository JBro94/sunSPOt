
import React, { Component } from 'react';
import './App.css';
import Map from './components/map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/resultCard';
import Calc from './components/calcButton';
import InputDistance from './components/routeInput';



class App extends Component {
  constructor(props){
    super(props);
    this.handleChangeDist = this.handleChangeDist.bind(this);
    this.state = {
      dist: 0,
      isActive: false
    };
  };

  handleChangeDist(newDist){
    this.setState({dist: newDist});
  };

  // handleActiveStatus(){
  //   this.setState({ isActive: !this.state.isActive });
  //   console.log(this.state.isActive);
  // }
  render(){
  const { isActive } = this.state.isActive; 
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerColumn'>
          <Card />
        </div>
        <div className='headerColumn'>
          <InputDistance dist={this.state.dist} handleChangeDist={this.handleChangeDist}/>
          <p>in miles</p>
        </div>
        <div className='headerColumn'>
          <button onClick={() => {
            this.setState({isActive: !isActive})
            }} >Change active Status</button>
        </div>
      </header>
      <Map />
      <footer className='App-footer'>
        <Card />
      </footer>
    </div>
  );
  }
}

export default App;
