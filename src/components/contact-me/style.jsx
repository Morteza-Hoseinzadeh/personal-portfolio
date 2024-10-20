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
