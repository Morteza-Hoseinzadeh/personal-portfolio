import React from 'react';
import CustomTypography from '../../../custom-components/typography';
import { nav_links } from '../../../utils/data/data';
import { Box } from '@mui/material';

export const NavLinks = ({ theme }) => {
  return (
    <>
      {nav_links?.map((link, index) => (
        <Box key={index}>
          <CustomTypography theme={theme}>{link.title}</CustomTypography>
        </Box>
      ))}
    </>
  );
};
