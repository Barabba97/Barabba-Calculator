import React, { Component } from 'react';

export default class Output extends Component {
    render() {
        return(
            <div className="outputScreen" id="display">
                {this.props.currentValue}
            </div>
        );
    }
}
