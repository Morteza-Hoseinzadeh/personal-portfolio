import React from 'react';
import CustomTypography from '../../../custom-components/typography';
import { nav_links } from '../../../utils/data/data';
import { Box } from '@mui/material';
// Import React Scroll
import { Link as ScrollLink } from 'react-scroll';

export const NavLinks = ({ theme }) => {
  return (
    <>
      {nav_links?.map((link, index) => (
        <Box key={index}>
          <CustomTypography theme={theme}>
            <ScrollLink to={link.to} spy={true} smooth={true} offset={-110} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
              {link.title}
            </ScrollLink>
          </CustomTypography>
        </Box>
      ))}
    </>
  );
};
