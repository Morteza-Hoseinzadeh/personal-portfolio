// Icons
import { FaTelegramPlane } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
// skills_Icons
import html from '../../assets/icons/icons8-html-5.svg';
import css from '../../assets/icons/icons8-css3.svg';
import js from '../../assets/icons/icons8-javascript.svg';
import tailwind from '../../assets/icons/icons8-tailwind-css.svg';
import sass from '../../assets/icons/icons8-sass.svg';
import react from '../../assets/icons/icons8-react-native.svg';
import typescript from '../../assets/icons/icons8-typescript.svg';
import nextJs from '../../assets/icons/icons8-nextjs.svg';
import nodeJs from '../../assets/icons/icons8-node-js.svg';
import expressJs from '../../assets/icons/icons8-express-js.svg';
import mongodb from '../../assets/icons/icons8-mongodb.svg';
import mySql from '../../assets/icons/icons8-mysql.svg';

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
// skills list
export const skills_data = [
  { title: 'HTML', src: html, value: '100%' },
  { title: 'CSS', src: css, value: '100%' },
  { title: 'JavaScript', src: js, value: '98%' },
  { title: 'React Js', src: react, value: '97%' },
  { title: 'Next js', src: nextJs, value: '95%' },
  { title: 'TypeScript', src: typescript, value: 'Taking a course' },
  { title: 'Tailwind', src: tailwind, value: '95%' },
  { title: 'Sass', src: sass, value: '96%' },
  { title: 'Node Js', src: nodeJs, value: '50%' },
  { title: 'Express', src: expressJs, value: '50%' },
  { title: 'Mongo-db', src: mongodb, value: '50%' },
  { title: 'MySQL', src: mySql, value: '50%' },
];
