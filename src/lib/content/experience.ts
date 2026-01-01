import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
  company: 'Kent State University',
  companyUrl: 'https://www.kent.edu/',
  role: 'Software Engineer (Graduate Project)',
  started: 'June 2022',
  upto: 'May 2023',
  tasks: [
    'Developed Student Engagement Analytics Platform, a full-stack web application that analyzed and visualized student participation data in real time to assist academic advisors in data-driven decision-making.',
    'Built the frontend using React.js and TypeScript to provide dynamic dashboards and a seamless user experience for 1,000+ student users.',
    'Implemented scalable backend services with Java Spring Boot, deployed on AWS Lambda, and integrated PostgreSQL (AWS RDS) for secure and efficient data storage.',
    'Designed RESTful APIs following object-oriented design patterns, improving backend performance and maintainability by 30%.',
    'Set up automated CI/CD pipelines using GitHub Actions with integrated JUnit tests, achieving 95% test coverage and reducing deployment time by 40%.',
  ],
  // techStack: 'Java, Spring Boot, React.js, TypeScript, AWS Lambda, RDS, S3, PostgreSQL, GitHub Actions, JUnit',
},
    {
      company: 'Eficens Systems',
      companyUrl: 'https://workforce.flairtechno.com/login',
      role: 'Full Stack Developer Intern',
      started: 'June 2022',
      upto: 'May 2023',
      tasks: [
        'Designed and developed responsive web applications using React.js, Redux, and MUI, ensuring a seamless and user-friendly front-end experience.',
        'Built robust back-end systems with Node.js and Express.js to handle data processing, authentication, and API integrations.',
        'Leveraged Google Cloud Functions to develop serverless components, enhancing application scalability and reducing operational overhead.',
        'Created and managed a PDF automation system that extracts text and automates data population in PDF documents, resulting in significant time and cost savings.',
        'Implemented a robust CI/CD workflow using GitHub Actions for deployments.',
      ],
    },
    {
      company: 'Internal HR Application',
      companyUrl: 'https://workforce.flairtechno.com/login',
      role: 'Software Developer',
      started: 'March 2020',
      upto: 'May 2022',
      tasks: [
        'Planned and developed a scalable Immigration Management Portal using React.js for the frontend and Node.js with Google Cloud Functions for the backend, supporting over 1,000 daily users.',
        'Designed a microservice architecture adhering to OpenAPI standards, facilitating secure employee management and reducing repetitive workflows by 40%.',
        'Implemented a dual-user role system with administrative document automation, streamlining immigration processes and enhancing operational efficiency.',
        'Ensured system scalability and performance, handling high user traffic without degradation.',
      ],
    },
    {
      company: 'Upwork-Freelance',
      companyUrl: 'https://www.upwork.com/',
      role: 'Freelance Developer',
      started: 'May 17 2023',
      upto: 'May 22 2023',
      tasks: [
        'Designed and deployed Firebase Cloud Functions to power backend operations for an iOS application, enabling real-time triggers for authentication, notifications, and data synchronization.',
        'Integrated Google Cloud Pub/Sub events to implement event-driven workflows, improving scalability and supporting seamless communication between application services.',
        'Debugged and optimized Node.js/JavaScript code in serverless functions, ensuring stable performance, faster execution times, and higher client satisfaction.',
        'Developed responsive and modern user interfaces for the web companion application using CSS3, Bootstrap 5, and Tailwind CSS, ensuring consistent cross-platform experiences.',
      ],
      feedback: 'I enjoyed working on this project. All expectations and requirements were communicated up front and the client was responsive to any of my requests for clarification. Felt very happy and joyful working with him.',
    },
  ],
};
