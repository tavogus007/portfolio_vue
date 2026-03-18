import cv from '../assets/pdf/CV_Gutierrez_EN.pdf'
import cv_es from '../assets/pdf/CV_Gutierrez_ES.pdf'

export const aboutMe = {
  name: 'Gustavo Gutierrez',
  role: 'Software engineer',
  bio: 'This website shows a little bit about me, my experience, my skills, and my education in a summarized way. You can review my CV for more accurate information. I hope you enjoy it 😄',
  cvPath: cv,
  cvPathEs: cv_es, 
}

export const experience = [
  {
    id: 'exp-1',
    role: 'Frontend Developer',
    company: 'Victoria Falls Institute',
    period: 'January 2026 - Present',
    bullets: [
      'Responsible for the full frontend development of the institute website.',
      'Built with Angular v19 and Bootstrap, deployed on Netlify (for personal testing).',
    ],
  },
    {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'MDPyEP (Ministerio de Desarrollo Productivo y Economía Plural)',
    period: 'August 2025 — October 2025',
    bullets: [
      'Complementation of the website SIAI, backend and frontend.',
      'Usying NestJS for the backend and Vue3 for the frontend',
    ],
  },
  {
    id: 'exp-3',
    role: 'Full Stack Developer',
    company: 'GAMLP (Gobierno Autónomo Municipal de La Paz)',
    period: 'November 2024 - July 2025',
    bullets: [
      'Commited to give a first version of the "Medico en tu Casa" system.',
      'Built with multiple languajes and frameworks because of its complexity, like NestJS, Angular (JS, v17-18), Android Studio and Kotlin.',
    ],
  },
]

export const education = [
  {
    id: 'edu-1',
    degree: 'Bachelor’s Degree in Computer Science,\nSpecialization: Software Engineering',
    institution: 'Universidad Mayor de San Andres — La Paz',
    period: '2021 — 2025',
  },
  {
    id: 'edu-2',
    degree: 'English Course at CBA',
    institution: 'Centro Boliviano Americano (CBA)',
    period: '2019 — 2021',
  },
    {
    id: 'edu-3',
    degree: 'Teaching assistant training at EPA',
    institution: 'Escuela Pedagógica Abierta (EPA)',
    period: '2023',
  },
  {
    id: 'edu-4',
    degree: 'Continuing education',
    institution: 'Platzi | Udemy | Scrimba',
    period: '2025 - present',
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['Vue 3', 'AngularJS', 'Angular 17 18 19', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['NestJS', 'Node.js', 'PostgreSQL', 'Postman'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Github', 'Gitlab', 'Netlify', 'n8n', 'Android Studio', 'Kotlin'],
  },
]

export const languages = [
    { lang: 'Spanish',  level: 'Native' },
    { lang: 'English',  level: 'Professional' },
    { lang: 'Portuguese',  level: 'Initial' },
]