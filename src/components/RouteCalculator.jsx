import React from 'react';
//import Select from 'react-select';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import lots from '../data/sunSPOtParking.json';

const options = lots.features;

class RouteCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            route: [
                {id: 1, start: [], destination: [], timeToCharge: 0, distance: 0}
            ]
        }
        this.handleDestChange = this.handleDestChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleRouteCalculation = this.handleRouteCalculation.bind(this);
    }

    handleStartChange(e){
        const route = [...this.state.route];
        route[0].start = (e.target.value.split(','));
        route[0].start[0] = Number(route[0].start[0]);
        route[0].start[1] = Number(route[0].start[1]);
        this.setState([...route]);
    }

    handleDestChange(e){
        const route = [...this.state.route];
        route[0].destination = (e.target.value.split(','));
        route[0].destination[0] = Number(route[0].destination[0]);
        route[0].destination[1] = Number(route[0].destination[1]);
        this.setState([...route]);
    }
 
    async handleRouteCalculation () {
        const route = [...this.state.route];
        const locales = `${route[0].start[0]},${route[0].start[1]};${route[0].destination[0]},${route[0].destination[1]}`;
        console.log(locales);
        const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${locales}?geometries=geojson&access_token=pk.eyJ1Ijoiamxicm9rIiwiYSI6ImNsMXB1b3dxdzAxdzUzY3M2MzEwMjMxcWkifQ.Jis7AzQxUBN6clwg2WuGIQ`,
            { method: 'GET'}
        );
        const json = await query.json();
        const data = json.routes[0];
        route[0].distance = data.distance;
        route[0].distance = (route[0].distance * .00062137)
        route[0].timeToCharge = (route[0].distance/25)*60;
        this.setState([...route]);
        console.log(this.state.route[0]);
    }

    render() { 
        return (
        <div className='routeCalc'>
            <div className='roputeInput'>
                <label>Start Location</label>
                <select
                    onChange={this.handleStartChange}
                >
                    {options.map((option) => (
                        <option key={option.id} value={option.geometry.coordinates}>{option.properties.Name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Destination</label>
                <select
                    onChange={this.handleDestChange}
                >
                    {options.map((option) => (
                        <option key={option.id} value={option.geometry.coordinates}>{option.properties.Name}</option>
                    ))}
                </select>
            </div>
            <div className='routeBtn'>
                <Button variant='primary' onClick={this.handleRouteCalculation}>
                    <span>Calculate Route & Required Charging Time</span>
                </Button>
            </div>
        </div>
        )
    }
}
 
export default RouteCalculator;