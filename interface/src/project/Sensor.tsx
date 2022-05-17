import { FC } from 'react';

import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

import GaugeChart from 'react-gauge-chart';

import ReactECharts from 'echarts-for-react';

import { SectionContent } from '../components';

const Sensor: FC = () => {
    const options = {
        series: [
            {
                type: 'gauge',
                min: 400,
                max: 1600,
                splitNumber: 12,
                axisLine: {
                    lineStyle: {
                        width: 30,
                        color: [
                            [0.333, '#47f184'],
                            [0.666, '#e3f65a'],
                            [1, '#eb3d3d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'auto',
                    distance: 40,
                    fontSize: 16
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} ppm',
                    color: 'auto',
                    fontSize: 26
                },
                data: [
                    {
                        value: 1000
                    }
                ]
            }
        ]
    };

    return <ReactECharts option={options} style={{height: '500px', width: '100%'}}/>;
};

export default Sensor;
