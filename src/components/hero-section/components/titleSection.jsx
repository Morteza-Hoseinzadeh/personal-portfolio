import React from 'react';
// Custom components
import CustomTypography from '../../../custom-components/typography';
// MUI imports
import { Box, Button } from '@mui/material';
// Typewriter effect
import TypewriterComponent from 'typewriter-effect';
// Icons
import { FaArrowTurnDown } from 'react-icons/fa6';

export default function TitleSection({ theme }) {
  const titleLines = ['Hello, My Name is Morteza Hosseinzadeh', "I'm A Frontend Developer"];

  return (
    <>
      <Box>
        <CustomTypography theme={theme} variant='h2' align='left'>
          <TypewriterComponent
            options={{ autoStart: true, loop: false }}
            onInit={(typewriter) => {
              typewriter.typeString(titleLines[0]).pauseFor(1000).deleteAll().typeString(titleLines[1]).start();
            }}
          />
        </CustomTypography>

        <CustomTypography theme={theme}>
          Hi, I’m Morteza! I’ve been working as a frontend developer for the past two years, with one year of professional experience. My expertise
          lies in creating responsive, visually appealing web applications that offer smooth user experiences.☃️
        </CustomTypography>
      </Box>

      <Box mt={3} display='flex' alignItems='center' gap={2}>
        <StyledButton theme={theme} variant='contained'>
          Contact Me
        </StyledButton>
        <StyledButton theme={theme} variant='outlined' endIcon={<FaArrowTurnDown />}>
          View Portfolio
        </StyledButton>
      </Box>
    </>
  );
}

function StyledButton({ children, theme, variant, endIcon }) {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor: variant === 'contained' ? theme.palette.primary.light : 'transparent',
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
        borderWidth: variant === 'outlined' ? '2px' : '0',
      }}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
}
