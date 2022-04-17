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
                {id: 1, start: [], destination: [], timeToCharge: 0}
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
 
    handleRouteCalculation () {
        //API call is made here with the coordinates of the start and destination
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