export const contact_me_section_style = (theme, darkMode) => ({
  p: 3,
  borderRadius: '15px',
  boxShadow: `${darkMode ? theme.palette.primary.dark : '#fff'} 0px 0px 10px`,
  //   backgroundColor: `${darkMode ? theme.palette.primary.dark : theme.palette.primary.light}`,
});

export const input_style = {
  fontSize: 15,
  backgroundColor: 'transparent',
  padding: 8,
};

export const conatct_section = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'left',
  gap: 5,
  m: 'auto',
  flexDirection: 'column',
  svg: {
    fontSize: 120,
  },
};

export const snackbarStyle = (theme, snackbar) => ({
  position: 'fixed',
  bottom: 0,
  right: 0,
  m: 3,
  backgroundColor: snackbar.type === 'success' ? theme.palette.success.dark : theme.palette.error.dark,
  p: 2,
  borderRadius: '12px',
});
