import React from 'react';
// Mui import's
import { Box } from '@mui/material';
// Custom style's
import { icon_style, links_style, nav_style } from './style';
// Ui components
import CustomTypography from '../../custom-components/typography/index';
import { NavLinks } from './components/links';
// Icons
import { BsTranslate } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';
// Redux state
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../utils/redux/action';

function Navbar({ theme }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    dispatch(changeTheme(newDarkMode));
    localStorage.setItem('isDarkMode', newDarkMode);
  };

  return (
    <Box sx={nav_style(theme)}>
      <Box>
        <CustomTypography variant={'h4'} fontWeight={'bold'} theme={theme}>
          Portfolio
        </CustomTypography>
      </Box>
      <Box sx={links_style(theme)}>
        <NavLinks theme={theme} />
      </Box>
      <Box sx={icon_style(theme)}>
        <BsTranslate size={24} />
        {darkMode ? <MdOutlineWbSunny size={24} onClick={handleDarkMode} /> : <FaRegMoon size={24} onClick={handleDarkMode} />}
      </Box>
    </Box>
  );
}

export default Navbar;
