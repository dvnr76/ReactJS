import React, {Component} from 'react';

class StateExample extends Component{

    constructor(props){
        super(props)

        this.state={
            msg:'Change Me'
        };
    }
    hangeText = () => {
        this.setState({msg: "Changed"});
      }

    render(){
        return (
            <div>
                   <h3>{this.state.msg}</h3>
            <button onClick={this.changeText}>Clickme</button>
            </div>
         
        )
    }
}

export default StateExample;