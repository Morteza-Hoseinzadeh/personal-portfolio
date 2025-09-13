import React, { useState } from 'react';

// Mui imports
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material';

// Redux Store
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../utils/redux/action';

// Icons
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';

// Dataes
import { nav_links } from '../../utils/data/data';

// Custom styles
import { drawer_section, humberger_menu, icon_style, justify_items, links_style, nav_style } from './style';
import { NavLinks } from './components/links';

// Scroll links
import { Link as ScrollLink } from 'react-scroll';

// Reusable Icons and Theming Toggle
const ThemeIcon = ({ isDarkMode, toggleDarkMode }) => (
  <Box onClick={toggleDarkMode} sx={{ cursor: 'pointer' }}>
    {isDarkMode ? <MdOutlineWbSunny size={24} /> : <FaRegMoon size={24} />}
  </Box>
);

// Drawer List Component
const DrawerContent = ({ onClose }) => (
  <Box role='presentation' sx={{ width: 250 }}>
    <Box m={2}>
      <Typography variant='h4' fontWeight='bold'>
        Portfolio
      </Typography>
    </Box>
    <Divider />
    <List>
      {nav_links.map((item, index) => (
        <ScrollLink to={item.to} spy={true} offset={-110} smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={onClose}>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        </ScrollLink>
      ))}
    </List>
    <Divider />
  </Box>
);

// Navbar Component
export default function Navbar({ theme }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    dispatch(changeTheme(newDarkMode));
    localStorage.setItem('isDarkMode', newDarkMode);
  };

  // Drawer open/close handlers
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const darkModeColorControl = darkMode ? theme.palette.primary.light : theme.palette.primary.dark;

  return <>{isMobile ? <MobileNavbar theme={theme} darkModeColorControl={darkModeColorControl} openDrawer={openDrawer} isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> : <DesktopNavbar theme={theme} darkModeColorControl={darkModeColorControl} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}</>;
}

// Mobile Navbar Component
const MobileNavbar = ({ theme, darkModeColorControl, openDrawer, isDrawerOpen, closeDrawer, toggleDarkMode, darkMode }) => (
  <Grid2 container spacing={4} sx={humberger_menu(theme)}>
    <Grid2 item size={6} sx={justify_items('left')}>
      <Typography variant='h4' fontWeight='bold' color={darkModeColorControl}>
        Portfolio
      </Typography>
    </Grid2>
    <Grid2 item size={6} sx={justify_items('right')}>
      <Box sx={{ ...icon_style(theme, darkModeColorControl), mr: 4 }}>
        <ThemeIcon isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Box>
      <Box sx={{ cursor: 'pointer' }}>
        <CgMenu size={24} color={darkModeColorControl} onClick={openDrawer} />
      </Box>
    </Grid2>
    <Drawer anchor='left' open={isDrawerOpen} onClose={closeDrawer} sx={drawer_section(theme)}>
      <DrawerContent onClose={closeDrawer} />
    </Drawer>
  </Grid2>
);

// Desktop Navbar Component
const DesktopNavbar = ({ theme, darkModeColorControl, toggleDarkMode, darkMode }) => (
  <Box sx={nav_style(theme)}>
    <Typography variant='h4' fontWeight='bold' color={darkModeColorControl}>
      Portfolio
    </Typography>
    <Box sx={links_style(theme)}>
      <NavLinks theme={theme} />
    </Box>
    <Box sx={icon_style(theme, darkModeColorControl)}>
      {/* <BsTranslate size={24} /> */}
      <ThemeIcon isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </Box>
  </Box>
);
