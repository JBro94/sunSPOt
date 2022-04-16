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
                {id: 1, dist: 0, timeToCharge: 0, direction: null}
            ]
        }
        this.handleChangeDist = this.handleChangeDist.bind(this);
        this.handleChargeCalculation = this.handleChargeCalculation.bind(this);
    }
    handleChangeDist = (e) => {
        const routes = [...this.state.route];
        routes[0].dist = Number(e.target.value);
        console.log(routes[0].dist);
        this.setState([...routes]);
    };

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
                <input placeholder='in miles' onChange={this.handleChangeDist}/>
            </div>
            <div className='routeBtn'>
                <Button variant='primary' onClick={this.handleChargeCalculation}>
                    <span>Calc Distance to Charge</span>
                </Button>
            </div>
        </div>
        )
    }
}
 
export default RouteCalculator;