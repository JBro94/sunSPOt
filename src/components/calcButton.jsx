import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function CalcButton() {
    return ( 
        <Button variant='primary' disabled=''>
        <span className='calc'>Calculate</span>
      </Button>
     );
}

export default CalcButton;