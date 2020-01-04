import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



class PieChartComponent extends Component {
    render() {
        return (
            <div>
                <Pie data={this.props.data} />
            </div>
        )
    }
}

export default PieChartComponent;