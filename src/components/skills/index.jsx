import React from 'react';
// MUI imports
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
// Data
import { skills_data } from '../../utils/data/data';
// Custom components
import CustomTypography from '../../custom-components/typography';
import SkillCard from './components/SkillCards';
// Styles
import { grid_cards_container } from './style';

export default function Skills({ theme, darkMode }) {
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box textAlign='center' sx={grid_cards_container} mb={4}>
        <CustomTypography theme={theme} variant='h3' fontWeight={'bold'}>
          My Skills
        </CustomTypography>
        <Box width={matchMdDown ? '100%' : '50%'} marginTop={2}>
          <CustomTypography theme={theme}>
            I am always eager to learn new technologies and stay updated with industry trends to enhance my skills and deliver high-quality solutions.
          </CustomTypography>
        </Box>
      </Box>
      <Grid container spacing={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {skills_data.map((skill, index) => (
          <SkillCard key={index} skill={skill} darkMode={darkMode} theme={theme} />
        ))}
      </Grid>
    </>
  );
}
