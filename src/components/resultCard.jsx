import React, { Component }from 'react';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Card extends Component {
    
    state = {
        message: 'Hey there'
        
    };
    render() { 
        return (
            <React.Fragment>
                <div className='present'>
                    <h1>
                        <Badge bg='primary'>
                            {this.state.message}
                        </Badge>
                    </h1>
                </div>
            </React.Fragment>
        );
    }

    
}
 
export default Card;