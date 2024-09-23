import React, { useEffect, useMemo } from 'react';
// style
import './style/style.css';
import './assets/font/font.css';

// Mui imports
import { Box } from '@mui/material';

// components
import Navbar from './components/navbar';

// Theme styles
import { ThemeProvider } from '@mui/material/styles';
import themeLight from './utils/theme/lightTheme';
import themeDark from './utils/theme/darkTheme';

// Redux store
import { useSelector } from 'react-redux';

const box_style = (theme) => ({
  fontFamily: theme.typography.fontFamily,
});

function App() {
  const { darkMode } = useSelector((state) => state.darkMode);
  const theme = useMemo(() => (darkMode ? themeDark : themeLight), [darkMode]);

  useEffect(() => {
    document.body.style.background = theme.palette.background.default;
    document.body.style.backgroundSize = 'cover';
    document.body.style.height = '100vh';

    return () => {
      document.body.style.background = '';
      document.body.style.height = '';
      document.body.style.width = '';
    };
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={box_style(theme)}>
        <Navbar theme={theme} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
