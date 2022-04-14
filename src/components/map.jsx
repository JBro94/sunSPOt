import React, { useState } from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import bloNoLots from '../data/BloNoLots_PCS_FeaturesToJSON.geojson';

//MapBox access token
const MAPBOX_TOKEN = 
"pk.eyJ1Ijoiamxicm9rIiwiYSI6ImNsMXB1b3dxdzAxdzUzY3M2MzEwMjMxcWkifQ.Jis7AzQxUBN6clwg2WuGIQ";

const layerStyle = {
    id: 'Lots',
    type: 'fill',
    paint: {
        'fill-color': '#dd4545',
        'fill-opacity': .5
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