import React from 'react';

// MUI
import { Box, Grid2 } from '@mui/material';

// Custom typography
import CustomTypography from '../../custom/typography/index';

// Data
import { skills_data } from '../../../utils/data/data';

import { SkillCardContainer } from '../style';

export default function SkillCard({ darkMode, theme }) {
  const types = ['frontend', 'styling', 'library', 'state_management', 'project_managers', 'databases', 'tool', 'others'];

  return (
    <Box width='100%'>
      {types.map((type, index) => (
        <Box key={index} mb={4} display={'flex'} flexDirection={'column'}>
          <Box my={2} textAlign={{ xs: 'center', lg: 'left' }}>
            <CustomTypography theme={theme} variant='h5' fontWeight={'bold'} gutterBottom>
              {type.replace('_', ' ').toUpperCase()}
            </CustomTypography>
          </Box>

          {/* Grid of skill cards */}
          <Grid2 container spacing={4}>
            {skills_data[type]?.map((item) => (
              <Grid2 key={item.title} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                <Box sx={SkillCardContainer({ theme, darkMode })}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
                    <Box component='img' src={item.src} alt={item.title} width={70} height={70} mb={1} sx={{ objectFit: 'contain' }} />
                    <CustomTypography theme={theme} variant='h6' fontWeight='500'>
                      {item.title}
                    </CustomTypography>
                    <span style={{ color: theme.palette.text.disabled }}>({item.level})</span>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ))}
    </Box>
  );
}
