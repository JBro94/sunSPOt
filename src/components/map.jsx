import React, { useState } from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import bloNoLots from '../data/sunSPOtParking.json';


//MapBox access token
const MAPBOX_TOKEN = 
"pk.eyJ1Ijoiamxicm9rIiwiYSI6ImNsMXB1b3dxdzAxdzUzY3M2MzEwMjMxcWkifQ.Jis7AzQxUBN6clwg2WuGIQ";

const layerStyle = {
    id: 'points',
    type: 'circle',
    paint: {
        'circle-radius': 5,
        'circle-color': '#d51818',
        'circle-stroke-color': '#000000',
        'circle-stroke-width': 1
    }
};


//functional Component that loads the base map
export default function Map(){

    const [viewState, setViewState] = useState({
        latitude: 40.5,
        longitude: -88.97,
        zoom: 12
    });

    return (
        <div>
            <ReactMapGL
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{width: '100vw', height: '90vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}>
                <Source id='parkingLots' type='geojson' data ={bloNoLots}>
                    <Layer {...layerStyle} />
                </Source>
            </ReactMapGL>
        </div>
    )
}