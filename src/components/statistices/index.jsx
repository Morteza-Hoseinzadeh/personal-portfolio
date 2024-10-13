import React from 'react';
// Mui imports
import Grid from '@mui/material/Grid2';
// Custom styles
import { container_box_style } from './style';
// statistices JSON data
import { statistices } from '../../utils/data/data';
// statistices component
import StatisticCards from './components/StatisticCards';

export default function Statistices({ theme, darkMode }) {
  return (
    <Grid container spacing={8} position='relative'>
      {statistices?.map((item, index) => {
        return (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }} sx={container_box_style}>
            <StatisticCards theme={theme} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
