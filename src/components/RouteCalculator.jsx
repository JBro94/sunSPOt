import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import lots from '../data/sunSPOtParking.json';



class RouteCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            route: [
                {id: 1, start: null, destination: null, timeToCharge: 0}
            ]
        }

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeDest = this.handleChangeDest.bind(this);
        this.handleChargeCalculation = this.handleChargeCalculation.bind(this);
    }
    // handleChangeDist = (e) => {
    //     const routes = [...this.state.route];
    //     routes[0].dist = Number(e.target.value);
    //     console.log(routes[0].dist);
    //     this.setState([...routes]);
    // };

    handleChangeStart = (e) => {
        const routes = [...this.state.route];
        routes[0].start = e.target.value;
        console.log(routes[0].start);
        this.setState([...routes]);
    }

    handleChangeDest = (e) => {
        const routes = [...this.state.route];
        routes[0].destination = e.target.value;
        console.log(routes[0].destination);
        this.setState([...routes]);
    }

    handleChargeCalculation = () => {
        const routes = [...this.state.route];
        routes[0].timeToCharge = (routes[0].dist/25)*60;
        
        if(routes[0].timeToCharge >= 60){
            routes[0].timeToCharge = routes[0].timeToCharge/60;
            console.log(routes[0].timeToCharge + " hr");
        }else{
            console.log(routes[0].timeToCharge + " min");
        }
        this.setState([...routes]);
    }

    componentDidMount(){
        console.log(lots.features[0].geometry.coordinates);
    }
    render() { 
        return (
        <div className='routeCalc'>
            <div className='roputeInput'>
                <input placeholder='Start' onChange={this.handleChangeStart}/>
            </div>
            <div>
                <input placeholder='Destination' onChange={this.handleChangeDest}/>
            </div>
            <div className='routeBtn'>
                <Button variant='primary' onClick={this.handleChargeCalculation}>
                    <span>Calculate Route & Required Charging Time</span>
                </Button>
            </div>
        </div>
        )
    }
}
 
export default RouteCalculator;