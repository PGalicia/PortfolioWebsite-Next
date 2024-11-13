import type { ExperienceType } from '@/types/ExperienceType'

export const EXPERIENCE: ExperienceType[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Fandom',
    link: 'https://www.fandom.com/',
    location: 'Remote',
    dateString: 'October 2022 - November 2024',
    isLaidOff: true,
    tasks: [
      'Collaborated with multiple teams across Fandom organization to complete months long initiative regarding Metacritic site transition to NuxtJs Framework that increased site performance by 30%.',
      'Improved indirect ads performance by 20% by implementing lazy loads on certain ad units and performing experiments to test different ad placements.',
      'Implemented reusable frontend modules in the Fandom webpage using React.js, streamlining development and improving code maintainability.',
      'Supported new engineers in grasping our team\'s tech stack for seamless integration and productivity.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Red Ventures',
    link: 'https://www.redventures.com/',
    location: 'Remote',
    dateString: 'November 2020 - October 2022',
    isLaidOff: false,
    tasks: [
      'Led frontend development for major initiatives, including an overhaul of Giantbomb\'s authentication process, which increased new user signups by 10% and improved authentication page performance by 45%.',
      'Enhanced site performance by migrating to Webpack, improving core web vitals by 20%, leading to faster load times and a better user experience.',
      'Contributed to modernizing the site by phasing out deprecated frameworks, and transitioning to TypeScript and VueJs.'
    ]
  },
  {
    title: 'Associate Frontend Developer',
    company: 'CBS Interactive',
    link: 'https://www.cbs.com/',
    location: 'San Francisco, CA',
    dateString: 'July 2019 - November 2020',
    isLaidOff: false,
    tasks: [
      'Developed multiple reusable frontend modules to be used across company-owned sites using Javascript.',
      'Assisted in developing an improved and structured CSS design system for enhanced functionality.'
    ]
  },
  {
    title: 'Front End Developer Intern',
    company: 'APRL',
    link: 'https://aprl.la/',
    location: 'Los Angeles, CA',
    dateString: 'April 2019 - June 2019',
    isLaidOff: false,
    tasks: [
      'Translated design team\'s mockups into responsive, interactive features, using ReactJs.',
      'Maintained brand standards under company guidelines.'
    ]
  },
  {
    title: 'Web Intern',
    company: 'The Fox Magazine',
    link: 'https://thefoxmagazine.com/',
    location: 'Remotely',
    dateString: 'August 2018 - March 2019',
    isLaidOff: false,
    tasks: [
      'Implement new sections in the Fox Magazine website.',
      'Refactor the backend to ensure a cleaner and efficient code.',
      'Identify and change the website\'s content to the better overall user experience.'
    ]
  },
  {
    title: 'Front End Developer Intern',
    company: 'University of California, Irvine',
    link: 'https://uci.edu/',
    location: 'Irvine, CA',
    dateString: 'January 2018 - June 2018',
    isLaidOff: false,
    tasks: [
      'Implemented an accessible database for anyone to make edits to the website\'s content.',
      'Developed a website that lists all available health resources on campus.',
      'Conducted research to determine important content that the website should include.'
    ]
  }
]
