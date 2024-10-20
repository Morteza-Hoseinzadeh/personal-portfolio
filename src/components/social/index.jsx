import React from 'react';
// MUI Imports
import { Box, Grid2, Link } from '@mui/material';
// Custom components
import CustomTypography from '../../custom-components/typography';
// Dataes
import { social_media_links } from '../../utils/data/data';

export default function Social({ theme, darkMode }) {
  return (
    <section id='Social'>
      <Box textAlign={'center'} mb={1}>
        <Box mb={1}>
          <CustomTypography theme={theme} variant={'h3'} fontWeight={'bold'}>
            Social Media
          </CustomTypography>
        </Box>
        <Box mt={1}>
          <CustomTypography theme={theme}>Building Bridges Across the Digital World – One Connection at a Time!</CustomTypography>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
        {social_media_links('#fff').map((item, index) => (
          <Box key={index} m={2.5}>
            <Link component='a' href={item.href} target='_blank' rel='noopener noreferrer'>
              {item.icon}
            </Link>
          </Box>
        ))}
      </Box>
    </section>
  );
}
