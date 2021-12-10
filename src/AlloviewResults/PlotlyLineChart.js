import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyLineChart(props) {
    return (
     
            <Plot
                data={[
                    {
                        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                        y: [6, 6, 6],
                        mode: 'lines',
                        name: 'Limit',
                        line: {
                            dash: 'dashdot',
                        },
                        marker: { color: 'red' }
                    },
                    {
                        type: 'line',
                        mode: 'lines+points+markers',
                        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                        y: [0, 4, 2],
                        marker: {
                            color: 'red',
                            size: 5,
                            line: {
                                color: 'red',
                                width: 6
                            }
                        },
                    },
                    {
                        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                        y: [3.5, 3.5, 3.5],
                        mode: 'lines',
                        name: 'Average',
                        line: {
                            dash: 'dashdot',
                        },
                        marker: { color: 'green' }
                    },
                    {
                        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                        y: [1, 1, 1],
                        mode: 'lines',
                        name: 'High',
                        line: {
                            dash: 'dashdot',
                        },
                        marker: { color: 'red' },

                    },
                ]}
                layout={
                    {
                        autosize: false,
                        width: 600,
                        margin: {
                            l: 50,
                            r: 50,
                            b: 100,
                            t: 100,
                            pad: 4
                        },
                        title: props.chartData,
                        showlegend: true,
                        legend: { "orientation": "h" }
                    }
                }
            />
    );
}

export default PlotlyLineChart;
