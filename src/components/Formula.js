import React, { Component } from 'react';

export default class Formula extends Component {
    render() {
        return(
            <div className="formulaScreen">
                {this.props.formula}
            </div>
        );
    }
}