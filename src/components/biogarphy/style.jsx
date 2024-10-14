export const icon_style = (theme, darkMode) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '57px',
  width: '100%',
  height: '57px',
  lineHeight: 1,
  fontSize: '30px',
  borderRadius: '50%',
  backgroundColor: darkMode ? `${theme.palette.primary.dark}` : `#fff`,
  color: darkMode ? '#fff' : theme.palette.primary.dark,
});

export const ListSectionCard = (theme, darkMode) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '32px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: `2px solid ${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  backgroundColor: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  boxShadow: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light} 0px 0px 10px`,
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

export const flex_center = () => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
});
