import React from 'react';
// MUI imports
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
// Custom components
import CustomTypography from '../../custom/typography/index';
// Styles
import { grid_cards_container, SkillCardContainer } from '../style';

export default function SkillCard({ skill, darkMode, theme }) {
  const { title, src, value } = skill;

  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={SkillCardContainer({ darkMode, theme })}>
        <Grid container spacing={2}>
          <img src={src} alt={title} width={75} />
        </Grid>
        <Box sx={grid_cards_container}>
          <CustomTypography theme={theme}>{value}</CustomTypography>
          <CustomTypography theme={theme} variant={'body2'}>
            {title}
          </CustomTypography>
        </Box>
      </Grid>
    </>
  );
}
