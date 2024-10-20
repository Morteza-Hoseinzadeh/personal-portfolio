// Socail Media Icons
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Navbar links
export const nav_links = [
  { title: 'About', to: 'AboutMe' },
  { title: 'Skills', to: 'MySkills' },
  { title: 'Experience', to: 'MyExperience' },
  { title: 'Social', to: 'MySocialMedia' },
  { title: 'Contact', to: 'ContactMe' },
];

export const social_media_links = (color) => [
  {
    title: 'Github',
    icon: <FaGithub size={48} color={color} />,
    href: 'https://github.com/Morteza-Hoseinzadeh/',
  },
  {
    title: 'Linkedin',
    icon: <FaLinkedin size={48} color={color} />,
    href: 'https://linkedin.com/in/morteza-hoseinzadeh-b735b7288',
  },
  {
    title: 'Telegram',
    icon: <FaTelegram size={48} color={color} />,
    href: 'https://t.me/morteza_hnz',
  },
  {
    title: 'Instagram',
    icon: <FaInstagram size={48} color={color} />,
    href: 'https://instagram.com/_itsmrtza_',
  },
  {
    title: 'Gmail',
    icon: <MdEmail size={48} color={color} />,
    href: 'mailto:morteza.hosseinzadeh8413@gmail.com',
  },
];
