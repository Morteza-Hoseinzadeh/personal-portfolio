import React, { useEffect, useMemo } from 'react';
// style
import './style/style.css';
import './assets/font/font.css';

// Mui imports
import { Box } from '@mui/material';

// components
import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import Statistices from './components/statistices';
import Skills from './components/skills';
import Biography from './components/biogarphy';
import Experience from './components/experience';
import Socail from './components/social';
import ConatctMe from './components/contact-me';

// Theme styles
import { ThemeProvider } from '@mui/material/styles';
import themeLight from './utils/theme/lightTheme';
import themeDark from './utils/theme/darkTheme';

// Redux store
import { useSelector } from 'react-redux';
import SnowEffect from './style/snowEffect/snowEffect';

const box_style = (theme) => ({
  fontFamily: theme.typography.fontFamily,
  p: '16px 32px',
});

function App() {
  const { darkMode } = useSelector((state) => state.darkMode);
  const theme = useMemo(() => (darkMode ? themeDark : themeLight), [darkMode]);

  useEffect(() => {
    document.body.style.background = theme.palette.background.default;
    document.body.style.height = 'fit-content';
    document.body.style.backgroundRepeat = 'no-repeat';
    return () => {
      document.body.style.background = '';
    };
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <SnowEffect />
      <Box sx={{ position: 'relative !important' }}>
        <Navbar theme={theme} />
        <Box sx={box_style(theme)}>
          <CustomBox>
            <HeroSection theme={theme} />
          </CustomBox>
          <CustomBox>
            <Statistices theme={theme} darkMode={darkMode} />
          </CustomBox>
          <CustomBox>
            <Biography theme={theme} darkMode={darkMode} />
          </CustomBox>
          <CustomBox>
            <Experience theme={theme} darkMode={darkMode} />
          </CustomBox>
          <CustomBox>
            <Skills theme={theme} darkMode={darkMode} />
          </CustomBox>
          <CustomBox>
            <ConatctMe theme={theme} darkMode={darkMode} />
          </CustomBox>
          <CustomBox>
            <Socail theme={theme} darkMode={darkMode} />
          </CustomBox>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function CustomBox({ children }) {
  return <Box mb={12}>{children}</Box>;
}

export default App;
