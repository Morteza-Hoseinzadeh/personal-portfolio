// Icons
import { FaTelegramPlane } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

// Navbar links
export const nav_links = [
  { title: 'About', to: 'AboutMe' },
  { title: 'Skills', to: 'MySkills' },
  { title: 'Experience', to: 'MyExperience' },
  { title: 'Social', to: 'MySocialMedia' },
  { title: 'Contact', to: 'ContactMe' },
];

// Hero section icons
export const icon_properties = (theme) => [
  { icon: <FaGithub />, url: 'https://github.com/yourprofile', fontSize: 24, color: theme.palette.text.primary },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/yourprofile', fontSize: 24, color: theme.palette.text.primary },
  { icon: <FaTelegramPlane />, url: 'https://t.me/yourprofile', fontSize: 24, color: theme.palette.text.primary },
];

export const statistices = [
  { title: 'Years Of Experience', description: '2' },
  { title: 'Project Completed', description: '4' },
  { title: "Happy Client's", description: '4' },
  { title: "Feedback's", description: '8' },
];
