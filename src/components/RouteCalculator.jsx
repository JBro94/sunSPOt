import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lots from '../data/sunSPOtParking.json';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function  RouteCalculator(props) {
    return ( 
            <div className='routeCalc'>
                <div className='roputeInput'>
                    <FormControl fullWidth>
                        <InputLabel>Start</InputLabel>
                        <Select
                            variant='filled'
                            id='sunSPOt_start_id'
                            label='Start'
                            autoWidth
                            value={props.startLocale}
                            onChange={props.onStartChange}
                        >
                            {lots.features.map((locale) => (
                                <MenuItem key={locale.id} value={locale.geometry.coordinates}>{locale.properties.Name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Finish</InputLabel>
                        <Select
                            variant='filled'
                            id='sunSPOt_dest_id'
                            label='Finish'
                            value={props.destLocale}
                            onChange={props.onDestChange}
                        >
                            {lots.features.map((locale) => (
                                <MenuItem key={locale.id} value={locale.geometry.coordinates}>{locale.properties.Name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='routeBtn'>
                    <Button variant='contained' onClick={props.onRouteCalculation}>
                        <span>Calculate Route</span>
                    </Button>
                </div>
            </div> );
};

export default RouteCalculator;