import React from 'react';
// Custom components
import CustomTypography from '../../custom/typography/index';
// MUI imports
import { Box, Button, IconButton } from '@mui/material';
// Icon Array
import { icon_properties } from '../../../utils/data/data';
import TypewriterComponent from 'typewriter-effect';

export default function TitleSection({ theme }) {
  return (
    <>
      <Box>
        <Box my={1}>
          <CustomTypography theme={theme} variant='h3'>
            I am Morteza
          </CustomTypography>
        </Box>

        <Box my={1}>
          <CustomTypography theme={theme} variant='h2' fontWeight='bold'>
            <TypewriterComponent options={{ strings: ['Frontend Developer', 'Web Designer'], autoStart: true, loop: true, delay: 75, deleteSpeed: 50 }} />
          </CustomTypography>
        </Box>

        <Box my={1}>
          <CustomTypography theme={theme} variant='h6'>
            Hi, I’m Morteza! I began my journey in frontend development in 2021 and have since gained two years of hands-on experience, including one year in a professional role. I focus on creating responsive, visually appealing web applications that deliver smooth and enjoyable user experiences.
          </CustomTypography>
        </Box>
      </Box>

      <Box mt={3} display='flex' alignItems='center' gap={2}>
        <Button variant='contained' size='large' sx={{ backgroundColor: theme.palette.primary.dark }}>
          Contact Me !
        </Button>

        {icon_properties(theme)?.map((item, index) => (
          <IconButton key={index} component='a' href={item.url} target='_blank' rel='noopener noreferrer' sx={{ border: '1px solid #fff' }}>
            {React.cloneElement(item.icon, { size: item.fontSize, color: item.color })}
          </IconButton>
        ))}
      </Box>
    </>
  );
}
