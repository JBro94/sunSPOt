import './App.css';
import Map from './components/map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerColumn'>
          <h1>sunSPOt</h1>
        </div>
        <div className='headerColumn'>
          <input type='num' placeholder='Trip Distance'></input>
          <p>in miles</p>
        </div>
        <div className='headerColumn'>
          <button>
            <span>Calculate Time for Charge</span>
          </button>
        </div>
      </header>
      <Map />
      <footer className='App-footer'>
        <p>Created By James Brokaw</p>
      </footer>
    </div>
  );
}

export default App;
