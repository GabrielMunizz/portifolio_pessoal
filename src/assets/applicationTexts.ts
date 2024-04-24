import { ApplicationTxtType } from './types'

const eVersion: ApplicationTxtType = {
  professional: [
    '- Full-Stack Web Developer',
    '- Guitar Enthusiast',
    '- Food Alchemist',
  ],
  contact: 'CONTACT ME',
  intro: {
    head: 'Introduction:',
    title: 'Full-Stack Web Developer',
    bioPreview: `Even before I graduate in Business Administration, back in 2013, I've already worked in the area as a administrative assistant.
    Worked hard, pushed myself and managed to have my own business, just to realize that it wasn't what I wanted to do for the rest
    of my life...`
  },
  seeFullBio: '-> ...About me.',
  header: {    
    projects: 'Projects',
    contact: 'Contact',
  }
}

const ptVersion: ApplicationTxtType = {
  professional: [
    '- Desenvolvedor Web Full-Stack',
    '- Entusiasta na Guitarra',
    '- Alquimista na Cozinha',
  ],
  contact: 'CONTATO',
  intro: {
    head: 'Introdução:',
    title: 'Desenvolvedor Web Full-Stack',
    bioPreview: `Mesmo antes de me formar em Administração de Empresas, lá em 2013, já trabalhava na área como assistente administrativo.
    Trabalhei muito, me esforcei e consegui ter meu próprio negócio, só para perceber que não era o que eu queria fazer da minha vida...`
  },
  seeFullBio: '-> ...Sobre mim.',
  header: {    
    projects: 'Projetos',
    contact: 'Contato',
  }
}

export default {
  eVersion,
  ptVersion,
}