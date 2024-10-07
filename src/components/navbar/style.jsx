export const nav_style = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '20px 32px',
  m: 2,
  background: 'rgba(255, 255, 255, 0)',
  borderRadius: '45px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.9px)',
});

export const links_style = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  h6: {
    mx: 2,
    cursor: 'pointer',
  },
});

export const icon_style = (theme) => ({
  display: 'flex',
  gap: 3,
  svg: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
});
