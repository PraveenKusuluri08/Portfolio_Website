import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
  title: 'What I Do',
  skills: [
    {
      id: getId(),
      title: 'Technologies I Work With',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building scalable full-stack applications with React.js, Next.js, and Node.js',
        'Developing robust backend systems using Java Spring Boot, Express.js, and Go',
        'Designing and implementing RESTful APIs with high performance and security',
        'Integrating cloud services (AWS, GCP) and serverless functions for scalable solutions',
        'Automating CI/CD pipelines with GitHub Actions for efficient deployments',
      ],
      softwareSkills: [
        // Languages
        { name: 'Python', icon: 'logos:python' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Go', icon: 'logos:go' },
        { name: 'C#', icon: 'logos:c-sharp' },

        // Frontend - Technologies worked on
        { name: 'React.js', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'Vue.js', icon: 'logos:vue' },
        { name: 'Svelte', icon: 'logos:svelte-icon' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Redux', icon: 'logos:redux' },
        { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
        { name: 'CSS3', icon: 'logos:css-3' },

        // Backend - Technologies worked on
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Express.js', icon: 'simple-icons:express' },
        { name: 'Django', icon: 'simple-icons:django' },
        { name: 'Flask', icon: 'logos:flask' },
        { name: 'Spring Boot', icon: 'logos:spring' },
        { name: '.NET', icon: 'logos:dotnet' },

        // Databases - Technologies worked on
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'Oracle SQL', icon: 'logos:oracle' },
        { name: 'AWS DynamoDB', icon: 'simple-icons:amazondynamodb' },
        { name: 'Firestore', icon: 'vscode-icons:file-type-firebase' },

        // Cloud & DevOps - Technologies worked on
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'GCP', icon: 'logos:google-cloud' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' },
        { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
        { name: 'Docker', icon: 'logos:docker-icon' },

        // Tools
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'Postman', icon: 'logos:postman' },
      ],
    },
  ],
};
