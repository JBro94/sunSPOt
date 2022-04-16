import React, { Component }from 'react';
import '../App.css';

class Card extends Component {
    render() { 
        return (
            <React.Fragment>
                <div>
                    <h1>
                        {this.props.message}
                    </h1>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Card;