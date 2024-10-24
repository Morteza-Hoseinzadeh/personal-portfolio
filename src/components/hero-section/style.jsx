export const hero_section_container = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const hero_section_image = (matchMdDown) => ({
  display: 'flex',
  justifyContent: matchMdDown ? 'center' : 'right',
  img: {
    width: '75%',
  },
});
