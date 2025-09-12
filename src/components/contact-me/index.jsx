import React, { useState } from 'react';
// Custom component
import CustomTypography from '../../components/custom/typography/index';
// MUI imports
import { Box, Button, Grid2 } from '@mui/material';
// Custom styles
import { conatct_section, contact_me_section_style, input_style, snackbarStyle } from './style';
// Axios service
import axios from 'axios';
// Icons
import { BsTelephone } from 'react-icons/bs';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

export default function ContactMe({ theme, darkMode }) {
  const formList = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Message'];
  const [snackbar, setSnackbar] = useState({ message: '', type: '' });

  const initialForm = { first_name: '', last_name: '', email: '', phone_number: '', message: '' };
  const [messageForm, setMessageForm] = useState(initialForm);

  const handleInputs = (key, value) => {
    setMessageForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post('/send-msg', messageForm)
      .then((res) => {
        setSnackbar({ message: res.data.message, type: 'success' });
        setTimeout(() => {
          setSnackbar({ message: '' });
        }, 3000);
      })
      .catch((err) => {
        setSnackbar({ message: err.message || 'An error occurred', type: 'error' });
        setTimeout(() => {
          setSnackbar({ message: '' });
        }, 3000);
      });
  };

  return (
    <section id='Contact'>
      {snackbar.message && snackbar.type && (
        <Box sx={snackbarStyle(theme, snackbar)}>
          <CustomTypography variant={'body1'} theme={theme}>
            {snackbar.message}
          </CustomTypography>
        </Box>
      )}

      <Box textAlign={'center'} mb={3}>
        <Header theme={theme} />
      </Box>

      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 6 }} container sx={contact_me_section_style(theme, darkMode)}>
          <Box textAlign={'left'}>
            <HeaderTitleSection theme={theme} />
          </Box>
          {formList.map((item, index) => {
            const key = item.toLowerCase().replace(' ', '_');
            return (
              <Grid2 size={{ xs: 12, md: key === 'message' ? 12 : 6 }} key={index}>
                <StyledInput handleInputs={handleInputs} item={item} messageForm={messageForm} name={key} />
              </Grid2>
            );
          })}
          <Grid2 size={12}>
            <Button variant='contained' onClick={handleSubmitForm} sx={{ backgroundColor: theme.palette.primary.dark }}>
              Send Message
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} container>
          <ContactMeDeatils theme={theme} />
        </Grid2>
      </Grid2>
    </section>
  );
}

const HeaderTitleSection = ({ theme }) => {
  return (
    <>
      <Box mb={1}>
        <CustomTypography theme={theme} fontWeight={'bold'} variant={'h4'}>
          Let's Talk Together
        </CustomTypography>
      </Box>
      <Box mt={1}>
        <CustomTypography theme={theme} variant={'body1'}>
          I design and code beautifully simple things and I love what I do. Just simple like that!
        </CustomTypography>
      </Box>
    </>
  );
};

const Header = ({ theme }) => {
  return (
    <>
      <Box mb={1}>
        <CustomTypography theme={theme} variant={'h3'} fontWeight={'bold'}>
          Contact Me
        </CustomTypography>
      </Box>
      <Box mt={1}>
        <CustomTypography theme={theme}>Let’s Create Something Amazing Together – Reach Out Today!</CustomTypography>
      </Box>
    </>
  );
};

const StyledInput = ({ item, messageForm, handleInputs, name }) => {
  const checkInputType = (input) => (input === 'Email' ? 'email' : 'text');
  const placeholder = item;

  return name !== 'message' ? (
    <input
      type={checkInputType(item)}
      placeholder={placeholder}
      style={input_style}
      value={messageForm[name]}
      onChange={(e) => handleInputs(name, e.target.value)}
    />
  ) : (
    <textarea
      placeholder={placeholder} // Set the same placeholder for textarea
      style={input_style}
      value={messageForm[name]} // Handle the value for textarea
      onChange={(e) => handleInputs(name, e.target.value)} // Handle input change for textarea
    />
  );
};

const ContactMeDeatils = ({ theme }) => {
  return (
    <Box sx={conatct_section}>
      <Box display={'flex'} alignItems={'center'}>
        <BsTelephone size={48} color='#fff' />
        <Box m={2}>
          <CustomTypography theme={theme} variant={'body1'}>
            Phone
          </CustomTypography>
          <CustomTypography theme={theme}>+09906451808</CustomTypography>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <MdOutlineMail size={48} color='#fff' />
        <Box m={2}>
          <CustomTypography theme={theme} variant={'body1'}>
            Email
          </CustomTypography>
          <CustomTypography theme={theme}>Morteza.hosseinzadeh8413@gmail.com</CustomTypography>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <FaLocationCrosshairs size={48} color='#fff' />
        <Box m={2}>
          <CustomTypography theme={theme} variant={'body1'}>
            Address
          </CustomTypography>
          <CustomTypography theme={theme}>Yaft Abad, District 17, Tehran, Iran</CustomTypography>
        </Box>
      </Box>
    </Box>
  );
};
