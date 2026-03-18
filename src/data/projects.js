import portfolio from '../assets/imgs/portfolio.png'
import vfri from '../assets/imgs/vfri.png'
import siai from '../assets/imgs/siai.png'
import chatbot1 from '../assets/imgs/chatbot1.png'
import chatbot2 from '../assets/imgs/chatbot2.png'
import chatbotn8n from '../assets/imgs/chatbotn8n.png'
import load_data from '../assets/imgs/load_data.png'
import inf122 from '../assets/pdf/inf122.pdf'
import inf116 from '../assets/pdf/inf116.pdf'
import mat117 from '../assets/pdf/mat117.pdf'

// ─── Featured Projects (imagen fija) ─────────────────────────────────────────
export const featuredProjects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio v1.0',
    description: 'This portfolio was developed using Vue.js and Tailwind CSS, showcasing my projects and skills in a visually appealing way.',
    image: portfolio,
    docUrl: null,
    techs: [
      { label: 'Vue3.js',     color: 'indigo' },
      { label: 'Netlify',     color: 'blue' },
      { label: 'Tailwind CSS', color: 'blue'   },
    ],
  },
    {
    id: 'victoria-falls',
    title: 'Victoria Falls',
    description: 'Responsable for the frontend development of the website for the institute.',
    image: vfri,
    liveUrl: 'https://victoriafalls.netlify.app/',
    docUrl: 'https://berry-protest-179.notion.site/Victoria-Falls-Regional-institute-302477532723800a8416e1ab1239d760',
    techs: [
      { label: 'Angular v19', color: 'indigo' },
      { label: 'Postman',     color: 'indigo' },
      { label: 'Bootstrap',   color: 'blue'   },
    ],
  },
  {
    id: 'siai',
    title: 'SIAI',
    description: 'Contributed to the development of the SIAI system, including feature implementation, testing, documentation, and full-stack support.',
    image: siai,
    liveUrl: 'https://siai.produccion.gob.bo/',
    docUrl: null,
    techs: [
      { label: 'Vue3',         color: 'indigo' },
      { label: 'NestJS',       color: 'indigo' },
      { label: 'Postgres',     color: 'indigo' },
      { label: 'Postman',      color: 'indigo' },
      { label: 'Tailwind CSS', color: 'blue'   },
    ],
  },
]

// ─── MEC Video Projects ───────────────────────────────────────────────────────
export const mecProjects = [
  {
    id: 'mec-igob',
    title: 'MEC - iGOB 24/7 Section',
    description: 'Section developed to be used in the website iGOB 24/7 of the municipality. Focused in the management of medical appointments.',
    videoId: 'OT3ogavLews',
    docUrl: 'https://www.figma.com/design/ZPzSueLDz942jDKLqHFKZk/PROYECTO-DE-GRADO---MOVIL?node-id=0-1&t=tE62qyuIrTCb1SyP-1',
    techs: [
      { label: 'AngularJS', color: 'indigo' },
      { label: 'NestJS',    color: 'indigo' },
      { label: 'Postgres',  color: 'indigo' },
      { label: 'Postman',   color: 'indigo' },
    ],
  },
  {
    id: 'mec-portal',
    title: 'MEC - Web Portal Section',
    description: 'Section developed to be used in the new version of the central web portal of the SIIS of the municipality. Oriented to the management of the hospital\'s functionalities.',
    videoId: 'N5yVZ0D1Bkw',
    docUrl: 'https://lucid.app/lucidchart/b8b92d09-cbce-4834-8c28-6496db668d7c/edit?invitationId=inv_730a7f97-e65d-48e5-8059-2aeefb8f9aab',
    techs: [
      { label: 'Angular v18', color: 'indigo' },
      { label: 'NestJS',      color: 'indigo' },
      { label: 'Postgres',    color: 'indigo' },
      { label: 'Postman',     color: 'indigo' },
      { label: 'Bootstrap',   color: 'blue'   },
    ],
  },
  {
    id: 'mec-smartwatch',
    title: 'MEC - Smartwatch Section',
    description: 'Demonstration of the app developed for the web portal of the SIIS. Developed for patients with special needs.',
    videoId: 'ClhHKYBlyhk',
    docUrl: null,
    techs: [
      { label: 'Kotlin',         color: 'indigo' },
      { label: 'Postgres',       color: 'indigo' },
      { label: 'Postman',        color: 'indigo' },
      { label: 'Android Studio', color: 'blue'   },
      { label: 'Wear OS',        color: 'blue'   },
    ],
  },
]

// ─── Personal Projects (carousel) ────────────────────────────────────────────
export const personalProjects = [
  {
    id: 'chatbot-meta',
    title: 'Chatbot - Meta',
    description: 'The chatbot was developed using the Meta services.',
    image: chatbot1,
    docUrl: null,
    techs: [
      { label: 'Node',          color: 'indigo' },
      { label: 'JavaScript',    color: 'blue'   },
      { label: 'Meta Services', color: 'blue'   },
    ],
  },
  {
    id: 'chatbot-telegram',
    title: 'Chatbot Telegram - BotFather',
    description: 'The chatbot was developed using BotFather for Telegram.',
    image: chatbot2,
    docUrl: null,
    techs: [
      { label: 'BotFather', color: 'blue' },
      { label: 'n8n',       color: 'blue' },
    ],
  },
  {
    id: 'n8n-workflow-1',
    title: 'n8n Workflow 1',
    description: 'Workflow to connect with supabase, extract info from mi CV, and recover in a table.',
    image: chatbotn8n,
    docUrl: null,
    techs: [
      { label: 'n8n', color: 'blue' },
      { label: 'Supabase', color: 'blue' },
      { label: 'Google Drive', color: 'blue' },
      { label: 'Gemini', color: 'blue' },
    ],
  },
  {
    id: 'n8n-workflow-2',
    title: 'n8n Workflow 2',
    description: 'Calling supabase for info posted, and answering questions about my CV.',
    image: load_data,
    docUrl: null,
    techs: [
      { label: 'n8n', color: 'blue' },
      { label: 'Supabase', color: 'blue' },
      { label: 'IA Agent', color: 'blue' },
      { label: 'Gemini', color: 'blue' },
    ],
  },
]

// ─── Personal Projects (carousel) ────────────────────────────────────────────
export const universityTrack = [
  {
    id: 'uni-1',
    title: 'Física I - FIS 122',
    description: '',
    image: null,
    pdfUrl: inf122,
    docUrl: null,
    techs: [
      { label: 'Physics', color: 'indigo' },

    ],
  },
  {
    id: 'uni-2',
    title: 'Física II - INF 116',
    description: '',
    image: null,
    pdfUrl: inf116,
    docUrl: null,
    techs: [
      { label: 'Physics', color: 'indigo' },

    ],
  },
  {
    id: 'uni-3',
    title: 'Matematica Discreta - MAT 117',
    description: '',
    image: null,
    pdfUrl: mat117,
    docUrl: null,
    techs: [
      { label: 'Maths', color: 'indigo' },
    ],
  },
    {
    id: 'uni-4',
    title: 'Introducción a la Matemática - MAT 99',
    description: '',
    image: null,
    videoId: 'YVRTrxc_SEQ',
    docUrl: null,
    techs: [
      { label: 'Maths', color: 'indigo' },
    ],
  },
]
