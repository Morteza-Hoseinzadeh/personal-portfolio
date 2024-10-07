import React from 'react';
import CustomTypography from '../../../custom-components/typography';
import { nav_links } from '../../../utils/data/data';
import { Box, Link } from '@mui/material';

export const NavLinks = ({ theme }) => {
  return (
    <>
      {nav_links?.map((link, index) => (
        <Box key={index}>
          <CustomTypography theme={theme}>
            <Link>{link.title}</Link>
          </CustomTypography>
        </Box>
      ))}
    </>
  );
};
