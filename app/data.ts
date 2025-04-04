type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}
type Motion = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Matcha = {
  name: string
  description: string
  image: string
  id: string
}
type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Computing for Community Collaboratory',
    description:
      'Building up an undergraduate research generator.',
    link: '/projects/C3',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },

  {
    name: 'BURST ✷',
    description: 'A showcase of student-made creative technical projects.',
    link: '/projects/BURST',
    video:
      'https://i.imgur.com/bhl4ceo.jpeg',
    id: 'project2',
  },
  {
    name: 'ETea',
    description: 'A video game about an alien bobarista.',
    link: '/projects/ETea',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743719918/ETea_-_Reveal_Teaser_1080_ihqygh.mp4',
    id: 'project2',
  },
  {
    name: 'Game Dev NPC AI Sim',
    description:
      'AI-driven NPC simulations in Unreal Engine for architectural design testing applications.',
      link: 'https://www.youtube.com/watch?v=6aNsE8aDWFE',
      video:
        'https://res.cloudinary.com/dghjime6m/video/upload/v1743735503/2025-04-03_22-52-27_ojdghr_8c6d24.mp4',
    id: 'gains',
  },
  {
    name: 'Site',
    description: 'What you currently are looking at!',
    link: '/projects/site',
    video:
      'https://i.imgur.com/bhl4ceo.jpeg',
    id: 'project2',
  },  {
    name: 'Circuits',
    description: 'Wires and whatnot',
    link: '/projects/site',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743737601/IMG_9684_k02npm.mov',
    id: 'project2',
  },
  
]
export const MOTION: Motion[] = [
   {
    name: 'five dynamics',
    description:
      'i show off cool rocket parts',
    link: '/',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743719692/main_ITERATION_9_r0dadq.mp4',
    id: 'motion1',
  }, {
    name: 'loco',
    description:
      'u make me go loco.',
    link: '/',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743623370/loco_whtqlw.mp4',
    id: 'motion1',
  },

  {
    name: 'ted',
    description:
      'a robot that, just like us, has limited time',
    link: '',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743718406/ted_t3wjfr.mp4',
    id: 'motion3',
  },
  {
    name: 'respell.ai',
    description:
      'trial video',
    link: '',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743718386/respellaiTrialVideo_arz48v.mp4',
    id: 'motion5',
  },
  {
    name: '12fps',
    description:
      'guess how many frames per second this is',
    link: '',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743718398/12fps_frcy0r.mp4',
    id: 'motion2',
  },
  {
    name: 'mindbarf',
    description:
      'bleuhdgh',
    link: '',
    video:
      'https://res.cloudinary.com/dghjime6m/video/upload/v1743718801/mbayay_nm6kpg.mp4',
    id: 'motion2',
  },
]
export const MATCHA: Matcha[] = [
  {
    name: 'Banan milk',
    description:
      'so freaking good',
    image:
      'https://i.imgur.com/HvtTUyX.png',
    id: 'motion1',
  },
  {
    name: 'I tried making it foamy',
    description:
      'The foam emphasises the bitterness of the matcha unfortunately',
    image:
      'https://i.imgur.com/jfEs9cs.png',
    id: 'motion1',
  },
  {
    name: 'Heavy cream',
    description:
      'My roommate made this (thanks emily)',
    image:
      'https://i.imgur.com/VS6UT8f.png',
    id: 'motion1',
  },
  {
    name: 'Strawberry to go',
    description:
      'My roommate also made this (thanks emily)',
    image:
      'https://i.imgur.com/FJVrqYC.png',
    id: 'motion1',
  },
]


export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'github',
    link: 'https://github.com/jaddenki',
  },
  {
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/jadden-picardal',
  },
]

export const EMAIL = 'jaddenpicardal@gmail.com'
