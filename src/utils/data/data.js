// Icons
import { FaTelegramPlane } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

// skills_Icons
import html from '../../utils/assets/icons/icons8-html-5.svg';
import css from '../../utils/assets/icons/icons8-css3.svg';
import js from '../../utils/assets/icons/icons8-javascript.svg';
import tailwind from '../../utils/assets/icons/icons8-tailwind-css.svg';
import git from '../../utils/assets/icons/icons8-git.svg';
import react from '../../utils/assets/icons/icons8-react-native.svg';
import typescript from '../../utils/assets/icons/icons8-typescript.svg';
import nextJs from '../../utils/assets/icons/icons8-nextjs.svg';
import antDesign from '../../utils/assets/icons/ant-design-2.svg';
import blockChain from '../../utils/assets/icons/blockchain.svg';
import chromeModern from '../../utils/assets/icons/chrome-modern-.svg';
import figma from '../../utils/assets/icons/figma-icon.svg';
import gitLab from '../../utils/assets/icons/gitlab-3.svg';
import github from '../../utils/assets/icons/github-icon-1.svg';
import leaflet from '../../utils/assets/icons/leaflet-1.svg';
import materialUi from '../../utils/assets/icons/material-ui-1.svg';
import postman from '../../utils/assets/icons/postman.svg';
import prettier from '../../utils/assets/icons/prettier-1.svg';
import sokcetIo from '../../utils/assets/icons/socket-io.svg';
import vsCode from '../../utils/assets/icons/visual-studio-code-1.svg';
import zustand from '../../utils/assets/icons/zustand.png';
import redux from '../../utils/assets/icons/redux.svg';

// About me Icons
import { IoDiamondOutline } from 'react-icons/io5';
import { RiTeamLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';
import { BiCoffee } from 'react-icons/bi';
import ArianaImg from '../../utils/assets/image/Company-Images/ariana.webp';
import Rahaco from '../../utils/assets/image/Company-Images/rahaco.webp';
import KishInstitute from '../../utils/assets/image/Company-Images/KishInstitute.jpg';

// Socail Media Icons
import { FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Navbar links
export const nav_links = [
  { title: 'About', to: 'About' },
  { title: 'Social', to: 'Social' },
  { title: 'Experience', to: 'Experience' },
  { title: 'Skills', to: 'Skills' },
];

// Hero section icons
export const icon_properties = (theme) => [
  { icon: <FaGithub />, url: 'https://github.com/Morteza-Hoseinzadeh/', fontSize: 24, color: theme.palette.text.primary },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/morteza-hoseinzadeh-b735b7288', fontSize: 24, color: theme.palette.text.primary },
  { icon: <FaTelegramPlane />, url: 'https://t.me/morteza_hnz', fontSize: 24, color: theme.palette.text.primary },
];

export const statistices = [
  { title: 'Years Of Experience', description: '2' },
  { title: 'Project Completed', description: '4' },
  { title: "Happy Client's", description: '4' },
  { title: "Feedback's", description: '8' },
];

export const skills_data = {
  // Frontend
  frontend: [
    { title: 'HTML', src: html, level: 'Advanced', type: 'frontend' },
    { title: 'CSS', src: css, level: 'Advanced', type: 'frontend' },
    { title: 'JavaScript', src: js, level: 'Advanced', type: 'frontend' },
    { title: 'TypeScript', src: typescript, level: 'Advanced', type: 'frontend' },
    { title: 'React', src: react, level: 'Advanced', type: 'frontend' },
    { title: 'Next.js', src: nextJs, level: 'Advanced', type: 'frontend' },
  ],

  // Styling
  styling: [
    { title: 'MUI', src: materialUi, level: 'Advanced', type: 'styling' },
    { title: 'Ant Design', src: antDesign, level: 'Intermediate', type: 'styling' },
    { title: 'Tailwind CSS', src: tailwind, level: 'Intermediate', type: 'styling' },
  ],

  // Libraries
  library: [
    { title: 'Leaflet.js', src: leaflet, level: 'Beginner', type: 'library' },
    { title: 'Socket.io', src: sokcetIo, level: 'Advanced', type: 'library' },
  ],

  // State Management
  state_management: [
    { title: 'Redux', src: redux, level: 'Advanced', type: 'state-management' },
    { title: 'Zustand', src: zustand, level: 'Intermediate', type: 'state-management' },
    { title: 'React Query', src: 'https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg', level: 'Intermediate', type: 'state-management' },
  ],

  // Project Managers
  project_managers: [
    { title: 'Git', src: git, level: 'Advanced', type: 'tool' },
    { title: 'GitHub', src: github, level: 'Advanced', type: 'tool' },
    { title: 'GitLab', src: gitLab, level: 'Beginner', type: 'tool' },
  ],

  // Tools
  tool: [
    { title: 'REST APIs', src: 'https://img.icons8.com/ios/64/api-settings.png', level: 'Advanced', type: 'tool' },
    { title: 'Prettier', src: prettier, level: 'Advanced', type: 'tool' },
    { title: 'Figma', src: figma, level: 'Intermediate', type: 'tool' },
    { title: 'VS Code', src: vsCode, level: 'Advanced', type: 'tool' },
    { title: 'Postman', src: postman, level: 'Advanced', type: 'tool' },
    { title: 'Chrome DevTools', src: chromeModern, level: 'Advanced', type: 'tool' },
  ],

  // Special
  others: [
    { title: 'n8n', src: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4', level: 'Beginner', type: 'others' },
    { title: 'Blockchain', src: blockChain, level: 'Beginner', type: 'others' },
  ],
};

export const my_strengths = [
  { title: 'Social Relactionship', icon: <IoDiamondOutline size={36} color='#fff' /> },
  { title: 'Team Work', icon: <RiTeamLine size={36} color='#fff' /> },
  { title: 'Motivation And Learning', icon: <FaCode size={36} color='#fff' /> },
  { title: 'Good Manners', icon: <BiCoffee size={36} color='#fff' /> },
];
// experience data
export const experience_info = {
  experience: [
    {
      name: 'Ariana Labs',
      field: 'Frontend Developer',
      date: '2023 - 2024',
      url: 'https://ir.linkedin.com/company/arianalabs',
      img: ArianaImg,
      desc: [
        {
          title: 'React.js Development',
          description: 'Building scalable, efficient, and maintainable web applications using React, leveraging its component-based architecture and state management capabilities.',
        },
        {
          title: 'Web Designer',
          description: 'Designing intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. My approach integrates best practices in user experience design to ensure that applications are both functional and enjoyable to use.',
        },
        {
          title: 'Collaboration & Agile Methodologies',
          description: 'Working closely with design teams, back-end developers, and stakeholders to deliver high-quality solutions on time and within scope. Familiar with Agile methodologies to manage and adapt to evolving project requirements.',
        },
        {
          title: 'Responsive Design',
          description: 'Creating adaptive and responsive layouts that provide a seamless experience across various devices and screen sizes.',
        },
      ],
    },
    {
      name: 'Rahaco',
      field: 'Intern Frontend Developer',
      date: '2023',
      url: 'https://rahaco.net/?lang=en',
      img: Rahaco,
      desc: [],
    },
    {
      name: 'Kish Institute',
      field: 'English Teacher',
      date: '2021 - 2023',
      url: 'https://www.kish-ist.net/Home/Index/En',
      img: KishInstitute,
      desc: [],
    },
  ],
  education: [
    {
      name: 'Ghods Technical and Vocational High School',
      field: 'High School Diploma in Computer Science',
      date: '2023',
      url: 'https://madyar.org/School/3456',
      desc: [],
    },
    {
      name: 'Kish Institute',
      field: 'TTC (Teacher Training Course)',
      date: '2022',
      url: 'https://www.kish-ist.net/Home/Index/En',
      desc: [],
    },
    {
      name: 'Kish Institute',
      field: 'E4A (Solution Advance Course)',
      date: '2021',
      url: 'https://www.kish-ist.net/Home/Index/En',
      desc: [],
    },
  ],
};
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
    href: 'https://instagram.com/frontend_morteza',
  },
  {
    title: 'Gmail',
    icon: <MdEmail size={48} color={color} />,
    href: 'mailto:morteza.hosseinzadeh8413@gmail.com',
  },
];
