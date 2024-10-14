// About me Icons
import { IoDiamondOutline } from 'react-icons/io5';
import { RiTeamLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';
import { BiCoffee } from 'react-icons/bi';

// Navbar links
export const nav_links = [
  { title: 'About', to: 'AboutMe' },
  { title: 'Skills', to: 'MySkills' },
  { title: 'Experience', to: 'MyExperience' },
  { title: 'Social', to: 'MySocialMedia' },
  { title: 'Contact', to: 'ContactMe' },
];

export const my_strengths = [
  { title: 'Social Relactionship', icon: <IoDiamondOutline size={36} color='#fff' /> },
  { title: 'Team Work', icon: <RiTeamLine size={36} color='#fff' /> },
  { title: 'Motivation And Learning', icon: <FaCode size={36} color='#fff' /> },
  { title: 'Good Manners', icon: <BiCoffee size={36} color='#fff' /> },
];
