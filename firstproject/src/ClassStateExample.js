import React, { Component } from "react";

class ClassStateExample extends Component {

    constructor(props){

        super(props);

        // State initilaization

        this.state={
            msg:0
        }
    }

    changeme =()=>{

        this.setState(
            {msg: this.state.msg+1}
        );
    }
 


        changemenegative =()=>{

            this.setState(
                {msg: this.state.msg-1}
            );
        
    }
    
  render() {
    return (
      <div>
        <h3>{this.state.msg}</h3>
        
        <button onClick={this.changeme}>+</button>
        <button onClick={this. changemenegative}>-</button>
      </div>
    );
  }
  
}


export default ClassStateExample;
