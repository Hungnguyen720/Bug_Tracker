import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';



class DoughnutChartComponent extends Component {
    render() {
        return (
            <div>
                <Doughnut data={this.props.data} />
            </div>
        )
    }
}

export default DoughnutChartComponent;