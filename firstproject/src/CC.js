import React, { Component } from 'react';

class CC extends Component {
    render() {
        return (
            <div>
                <h1>Class component{this.props.name}</h1>
            </div>
        );
    }
}

export default CC;