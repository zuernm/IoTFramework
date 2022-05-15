import { FC } from 'react';

import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

import GaugeChart from 'react-gauge-chart';

import { SectionContent } from '../components';

const Sensor: FC = () => (
    <GaugeChart id="gauge-chart2"
                nrOfLevels={20}
                percent={0.86}
                hideText={true}
                formatTextValue={value => value + 'kbit/s'}
    />
);

export default Sensor;
