import React from 'react';
// MUI imports
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
// Custom components
import CustomTypography from '../custom/typography/index';
import SkillCard from './components/SkillCards';
// Styles
import { grid_cards_container } from './style';

export default function Skills({ theme, darkMode }) {
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <section id='Skills'>
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
      <SkillCard darkMode={darkMode} theme={theme} />
    </section>
  );
}
