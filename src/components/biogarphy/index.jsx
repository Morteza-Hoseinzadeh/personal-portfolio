import React from 'react';
// MUI imports
import { Box, Divider, Grid2, Stack, Typography, useMediaQuery } from '@mui/material';
// Style
import { ListSectionCard } from './style';
// Custom components
import CustomTypography from '../../custom-components/typography';
// My avatar
import myAvatar from '../../assets/image/avatar/my-avatar.jpg';
// Data source
import { my_strengths } from '../../utils/data/data';

const Biography = ({ theme, darkMode }) => {
  const isMatchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box textAlign='center' mb={1}>
        <CustomTypography theme={theme} variant='h3' fontWeight={'bold'}>
          About Me
        </CustomTypography>
      </Box>
      <Box textAlign='center' mb={4}>
        <CustomTypography theme={theme} variant='h6'>
          A Passionate Frontend Developer Ready to Shape the Future
        </CustomTypography>
      </Box>

      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, xl: 6 }} sx={ListSectionCard(theme, darkMode)}>
          <BiographySection theme={theme} isMatchMdDown={isMatchMdDown} />
        </Grid2>
        <Grid2 size={{ xs: 12, xl: 6 }} container spacing={4}>
          <StrengthsSection theme={theme} darkMode={darkMode} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

const BiographySection = ({ theme, isMatchMdDown }) => (
  <Box display='flex' alignItems='center'>
    {!isMatchMdDown && (
      <Box mr={2}>
        <img src={myAvatar} alt='My Avatar' width={175} style={{ borderRadius: '15px' }} />
      </Box>
    )}
    <Box>
      <Typography fontSize={18} color={theme.palette.primary.main}>
        I’m Morteza Hosseinzadeh, a 19-year-old frontend developer with a passion for learning and technology. I’ve developed skills in HTML, CSS,
        SASS, Bootstrap, Tailwind, JavaScript, jQuery, React.js, TypeScript, Next.js, Git, npm, Yarn, and MUI. I’m dedicated to creating responsive,
        user-friendly interfaces and eager to tackle new challenges in web development.
      </Typography>
    </Box>
  </Box>
);

const StrengthsSection = ({ theme, darkMode }) => (
  <>
    {my_strengths.map((item, index) => (
      <Grid2 size={{ xs: 12, md: 6 }} key={index} sx={ListSectionCard(theme, darkMode)}>
        <Box display='flex' alignItems='center'>
          <Stack direction='row' divider={<Divider orientation='vertical' flexItem sx={{ backgroundColor: '#fff' }} />} spacing={1.5}>
            {item.icon}
            <CustomTypography theme={theme}>{item.title}</CustomTypography>
          </Stack>
        </Box>
      </Grid2>
    ))}
  </>
);

export default Biography;
