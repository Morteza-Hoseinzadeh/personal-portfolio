import React from 'react';
// MUI imports
import { Box, useMediaQuery } from '@mui/material';

// Hero section image import
import heroSectionImg from '../../assets/image/hero-section-image/background.png';
import TitleSection from './components/titleSection';

export default function HeroSection({ theme }) {
  // Media query hook to handle responsiveness
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display='flex' flexDirection={matchMdDown ? 'column-reverse' : 'row'} justifyContent='space-between' alignItems='center' mt={4}>
      {/* Left: Title section */}
      <Box display='flex' flexDirection='column' width={matchMdDown ? '100%' : '50%'}>
        <TitleSection theme={theme} matchMdDown={matchMdDown} />
      </Box>

      {/* Right: Hero image */}
      <Box display='flex' justifyContent={matchMdDown ? 'center' : 'flex-end'} width={matchMdDown ? '100%' : '50%'}>
        <img src={heroSectionImg} alt='hero_section_img' style={{ width: '75%' }} />
      </Box>
    </Box>
  );
}
