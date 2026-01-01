import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Praveen Kusuluri.',
    tagline: 'Building efficient and scalable web solutions.',
    description:
    "I'm a Full-Stack Web Developer specializing in modern web technologies and enterprise-grade backend systems. I craft exceptional user experiences with React.js and Next.js, while building robust, scalable backends using Java Spring Boot, Node.js, and Go (Golang).",
    longDescription: "With deep expertise in Java Spring Boot for enterprise applications, I design and implement RESTful APIs, microservices architectures, and cloud-native solutions. My tech stack spans from frontend frameworks like React.js and Next.js to backend technologies including Spring Boot, Node.js, Express.js, and Go. I leverage cloud platforms like AWS (DynamoDB, S3, Lambda) and Google Cloud Platform (Cloud Functions, Firestore) to build scalable, production-ready applications.",
    specialText: 'Currently available for Internships & Full-Time opportunities',
    techStack: [
        'Java Spring Boot',
        'React.js',
        'Next.js',
        'Node.js',
        'Go (Golang)',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'AWS',
        'Google Cloud',
    ],
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
