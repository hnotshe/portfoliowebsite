import {
  mobile,
  backend,
  creator,
  web,
  python,
  cplus,
  solidity,
  javascript,
  excel,
  unity,
  blender,
  html,
  css,
  reactjs,
  java,
  git,
  figma,
  sql,
  techmatters,
  stanford,
  ppi,
  mtn,
  mazi,
  remix,
  nextdoor,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "c++",
    icon: cplus
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "blender",
    icon: blender,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Machine Learning/SWE Intern",
    company_name: "Nextdoor",
    icon: nextdoor,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Developing CNN-RNN AI model to predict potential accessibility issues for frontend web pushes"
    ],
  },
  {
    title: "Machine Learning/SWE Intern",
    company_name: "Remix Inc.",
    icon: remix,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jun 2024",
    points: [
      "Co-designed and implemented a data capture rig for training and fine-tuning the Street Gaussian Model, including aiding in hyper-parameter tuning using TensorFlow, Python, and NumPy",
      "Contributed to the development of the company website utilizing the MERN stack (MongoDB, Express.js, React, and Node.js)"
    ],
  },
  {
    title: "Product Manager/SWE Intern",
    company_name: "Tech Matters",
    icon: techmatters,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Designed smart contracts using Solidity to migrate user data into a semi-trustless system",
      "Worked on the frontend for the LandPKS project, an open-source financial and agricultural planning tool utilized by over 20 underprivileged communities worldwide, particularly in Africa and South America",
    ],
  },
  
  {
    title: "Data Analyst Intern",
    company_name: "Mazi Asset Management",
    icon: mazi,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Developed and integrated a CLO risk sensitivity model using custom logistic equations (PyTorch)",
      "Researched effect of South Africa’s electricity shortages on home security industry ($86.39m size industry)",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "MTN",
    icon: mtn,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Sep 2021",
    points: [
      "Developed criteria and then implemented K-means clustering to identify old/unused phone numbers out of >280 million subscriptions (AWS DevOp, Firebase & MongoDB Tools)",
    ],
  },
  /*{
    title: "Student Technology Specialist",
    company_name: "Stanford",
    icon: stanford,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Sept 2023",
    points: [
      "Support ~17 000 students and handle over 2 000 quarterly tickets, largely concerning network security and user authentication. Also troubleshoot various hardware and software issues.",
    ],
  },*/
 /* {
    title: "Student Inclusion Facilitator",
    company_name: "Stanford",
    icon: stanford,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Mediate intergroup communication around sensitive issues of social justice and equity.",
    ],
  },*/
  /*{
    title: "Co-Founder/Head of Development",
    company_name: "Pawn Push Initiative",
    icon: ppi,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Co-Founder of AI- powered afterschool chess organization for underprivileged children in our area. Raised >$6 000.",
      "I developed the syllabus and learning plan for students as well as was co-director of fundraising.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };