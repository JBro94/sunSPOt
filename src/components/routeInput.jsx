import React from 'react';


class InputDistance extends React.Component {
    constructor(props){
        super(props);
        this.handleChangeDist = this.handleChangeDist.bind(this);
    }
    handleChangeDist(e){
        this.props.handleChangeDist(e.target.value);
    };
    
    render() { 
        return (
        <input value={this.props.distance} onChange={this.handleChangeDist}/>);
    }
}
 
export default InputDistance;