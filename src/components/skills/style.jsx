import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Styled component for the skill card container
export const SkillCardContainer = ({ theme, darkMode }) => ({
  width: '100%',
  padding: '16px',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boder: `1.5px solid ${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  boxShadow: `${darkMode ? `${theme.palette.primary.dark} 0px 0px 10px` : `rgba(255,255,255, 0.5) 0px 0px 10px`}`,
  '&:hover': {
    backgroundColor: darkMode ? theme.palette.primary.dark : theme.palette.primary.light,
    img: {
      filter: 'none',
      transform: 'scale(1.1)',
    },
  },
  img: {
    transition: 'all 0.2s ease',
    filter: 'grayscale(100%)',
  },
});

// Styled component for the title box
export const TitleBox = styled(Box)({
  marginTop: '12px',
});

export const grid_cards_container = () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
