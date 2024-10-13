// skills_Icons
import html from '../../assets/icons/icons8-html-5.svg';
import css from '../../assets/icons/icons8-css3.svg';
import js from '../../assets/icons/icons8-javascript.svg';
import bootstrap from '../../assets/icons/icons8-bootstrap.svg';
import tailwind from '../../assets/icons/icons8-tailwind-css.svg';
import sass from '../../assets/icons/icons8-sass.svg';
import react from '../../assets/icons/icons8-react-native.svg';
import typescript from '../../assets/icons/icons8-typescript.svg';
import redux from '../../assets/icons/icons8-redux.svg';
import npm from '../../assets/icons/icons8-npm.svg';
import git from '../../assets/icons/icons8-git.svg';
import github from '../../assets/icons/icons8-github.svg';
import firebase from '../../assets/icons/icons8-firebase.svg';
import mui from '../../assets/icons/icons8-material-ui.svg';
import yarn from '../../assets/icons/yarn-package-manager-icon.svg';
import jquery from '../../assets/icons/jquery-icon.svg';
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

// skills list
export const skills_data = [
  { title: 'Web Development Fundamentals', src: [html, css, js] },
  { title: 'CSS Frameworks', src: [bootstrap, tailwind] },
  { title: 'CSS Preprocessors', src: [sass] },
  { title: 'JavaScript Frameworks', src: [react, typescript, nextJs] },
  { title: 'JavaScript Libraries', src: [jquery] },
  { title: 'State Management', src: [redux] },
  { title: 'Package Managers', src: [npm, yarn] },
  { title: 'Version Control', src: [git] },
  { title: 'Deployment Platforms', src: [firebase, github] },
  { title: 'UI Component Libraries', src: [mui] },
  { title: 'Backend Development', src: [nodeJs, expressJs] },
  { title: 'Database Technologies', src: [mongodb, mySql] },
];
