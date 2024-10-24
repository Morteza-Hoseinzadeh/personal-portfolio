import React, { useState } from 'react';
// Mui import's
import { Box, Grid2, Link, useMediaQuery } from '@mui/material';
// Custom components
import CustomTypography from '../../custom-components/typography';
// Icons
import { FaLink } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
// Data'es
import { experience_info } from '../../utils/data/data';
// Image
import { experience_section_style, iconTransition, imgStyle, slideAnimation } from './style';

export default function Experience({ darkMode, theme }) {
  return (
    <section id='Experience'>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box mb={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <CustomTypography theme={theme} variant={'h3'} fontWeight={'bold'}>
              Experience
            </CustomTypography>
          </Box>
          <CardsSection theme={theme} darkMode={darkMode} data={experience_info.experience} />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box mb={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <CustomTypography theme={theme} variant={'h3'} fontWeight={'bold'}>
              Education
            </CustomTypography>
          </Box>
          <CardsSection theme={theme} darkMode={darkMode} data={experience_info.education} />
        </Grid2>
      </Grid2>
    </section>
  );
}

const CardsSection = ({ theme, darkMode, data }) => {
  const matchMdDown = useMediaQuery(theme.breakpoints.down('sm'));

  // Track the description visibility for each item by index
  const [openSections, setOpenSections] = useState({});

  const handleShowDescription = (index) => {
    // Toggle the specific section's visibility
    setOpenSections((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    // output => {0: false, 1: false}
    // output => {0: true, 1: false}
    // output => {0: false, 1: true}
  };

  return (
    <>
      {data.map(({ img, name, field, date, url, desc }, index) => (
        <Grid2 key={index} size={12}>
          <Box sx={experience_section_style(theme, darkMode)}>
            <Box display='flex' gap={2}>
              {img && <img src={img} alt={`${name} logo`} style={imgStyle} />}
              <Box display='flex' flexDirection='column'>
                <CustomTypography theme={theme} variant='h5' fontWeight='bold'>
                  {name}
                </CustomTypography>
                <CustomTypography theme={theme}>{field}</CustomTypography>
                <CustomTypography theme={theme} variant='span'>
                  {date}
                </CustomTypography>
                {!matchMdDown && url && (
                  <Box display='flex' alignItems='center' gap={1}>
                    <FaLink color={theme.palette.primary.main} />
                    <CustomTypography theme={theme} variant='body1'>
                      <Link href={url} sx={{ textDecoration: 'none' }}>
                        {url}
                      </Link>
                    </CustomTypography>
                  </Box>
                )}
              </Box>
            </Box>
            {desc.length > 0 && (
              <Box>
                <IoIosArrowDown
                  style={iconTransition(theme, openSections[index])} // Use openSections[index] for this specific section
                  onClick={() => handleShowDescription(index)} // Pass the index to toggle the specific section
                />
              </Box>
            )}
          </Box>
          <Box sx={slideAnimation(theme, darkMode, openSections[index])}>
            {openSections[index] && // Show the description only if this section is open
              desc.map((item, i) => (
                <Box key={i} m={2}>
                  <Box sx={{ mb: 4 }}>
                    <CustomTypography theme={theme} variant='h5'>
                      {item.title}
                    </CustomTypography>
                    <CustomTypography theme={theme} variant='body1'>
                      {item.description}
                    </CustomTypography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Grid2>
      ))}
    </>
  );
};
