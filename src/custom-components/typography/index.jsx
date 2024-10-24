import { Typography } from '@mui/material';
import React from 'react';

export default function CustomTypography({ theme, variant, fontWeight, children }) {
  return (
    <Typography color={theme.palette.primary.main} variant={variant ? variant : 'h6'} fontWeight={fontWeight ? fontWeight : 'normal'}>
      {children}
    </Typography>
  );
}
