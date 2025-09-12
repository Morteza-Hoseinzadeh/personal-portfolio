import React from 'react';
import CustomTypography from '../../custom/typography/index';
import { Divider, Stack } from '@mui/material';

const CustomDivider = () => {
  return <Divider orientation='vertical' flexItem sx={{ backgroundColor: '#fff' }} />;
};

export default function StatisticCards({ item, theme }) {
  return (
    <Stack direction='row' alignItems={'center'} divider={<CustomDivider />} spacing={3}>
      <CustomTypography theme={theme} variant={'h2'} fontWeight={'bold'}>
        +{item.description}
      </CustomTypography>
      <CustomTypography theme={theme} variant={'h5'}>
        {item.title}
      </CustomTypography>
    </Stack>
  );
}
