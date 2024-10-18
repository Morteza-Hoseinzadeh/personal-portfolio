export const experience_section_style = (theme, darkMode) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: 2,
  borderRadius: '15px',
  border: `2px solid ${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  backgroundColor: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  boxShadow: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light} 0px 0px 10px`,
});

export const iconTransition = (theme, isDescShow) => ({
  color: theme.palette.primary.main,
  fontSize: 28,
  cursor: 'pointer',
  transition: 'all 0.25s ease-in-out',
  transform: isDescShow ? 'rotate(180deg)' : 'rotate(360deg)',
});

export const slideAnimation = (theme, darkMode, isDescShow) => ({
  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  transform: isDescShow ? 'translateY(0)' : 'translateY(-20px)',
  opacity: isDescShow ? 1 : 0,
  height: isDescShow ? 'auto' : 0,
  overflow: 'hidden',
  borderRadius: '15px',
  my: 2,
  border: `2px solid ${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
  boxShadow: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light} 0px 0px 10px`,
});

export const imgStyle = {
  width: '100px',
  borderRadius: '15px',
  objectFit: 'cover',
};
