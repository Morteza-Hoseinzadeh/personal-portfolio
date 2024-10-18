import ArianaImg from '../../assets/image/Company-Images/ariana.webp';
import Rahaco from '../../assets/image/Company-Images/rahaco.webp';
import KishInstitute from '../../assets/image/Company-Images/KishInstitute.jpg';

// Navbar links
export const nav_links = [
  { title: 'About', to: 'AboutMe' },
  { title: 'Skills', to: 'MySkills' },
  { title: 'Experience', to: 'MyExperience' },
  { title: 'Social', to: 'MySocialMedia' },
  { title: 'Contact', to: 'ContactMe' },
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
          description:
            'Building scalable, efficient, and maintainable web applications using React, leveraging its component-based architecture and state management capabilities.',
        },
        {
          title: 'Web Designer',
          description:
            'Designing intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. My approach integrates best practices in user experience design to ensure that applications are both functional and enjoyable to use.',
        },
        {
          title: 'Collaboration & Agile Methodologies',
          description:
            'Working closely with design teams, back-end developers, and stakeholders to deliver high-quality solutions on time and within scope. Familiar with Agile methodologies to manage and adapt to evolving project requirements.',
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
