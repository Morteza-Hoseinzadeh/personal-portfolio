export const nav_style = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '32px',
});

export const links_style = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  mr: 5,
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
