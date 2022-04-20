import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup, Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import bloNoLots from '../data/sunSPOtParking.json';
import '../App.css';


//MapBox access token
const MAPBOX_TOKEN = 
"pk.eyJ1Ijoiamxicm9rIiwiYSI6ImNsMXB1b3dxdzAxdzUzY3M2MzEwMjMxcWkifQ.Jis7AzQxUBN6clwg2WuGIQ";

//functional Component that loads the base map
export default function Map(props){
    const [viewState, setViewState] = useState({
        latitude: 40.5,
        longitude: -88.97,
        zoom: 12
    });
    const [selectedLot, setSelectedLot] = useState(null);

    return (
        <div className='blo-no-map'>
            <ReactMapGL
            {...viewState}
            mapboxAccessToken={MAPBOX_TOKEN}
            onMove={evt => setViewState(evt.viewState)}
            style={{width: '100vw', height: '90vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {bloNoLots.features.map((lot) => (
                    <Marker key={lot.properties.Name} latitude={lot.geometry.coordinates[1]} longitude={lot.geometry.coordinates[0]}>
                        <button className='marker-btn' onClick={(e) => {
                            e.preventDefault();
                            setSelectedLot(lot);
                        }}>
                            <img src='/EV_Icon.png' alt='chargingIcon' width={20} height={20}/>
                       </button>
                    </Marker>
                ))}
                {selectedLot ? (
                    console.log(selectedLot.geometry.coordinates),
                    <Popup 
                        latitude={selectedLot.geometry.coordinates[1]} 
                        longitude={selectedLot.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedLot(null);
                        }}
                    >
                        <div>
                           <p>{selectedLot.properties.Name}</p>
                        </div>
                    </Popup>
                ) : null}

                {props.displayRoute && (
                    <Source id='route' type='geojson' data={props.route}>
                        <Layer
                            id='routeLayer'
                            type='line'
                            source='path'
                            layout = {{
                                'line-join': 'round',
                                'line-cap': 'round'
                            }}
                            paint={{
                                'line-color': '#4545dd',
                                'line-width': 5
                            }}
                        />
                    </Source>)}
            </ReactMapGL>
        </div>
    )
}