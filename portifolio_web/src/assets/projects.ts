import { ProjectsCardType } from '../types'
import rickAndMortyImg from '../images/projectsImages/rickAndMorty.png';
import tunesImg from '../images/projectsImages/trybeTunes.png';
import IBGEImg from '../images/projectsImages/IBGENews.png';
import underConstructionImg from '../images/projectsImages/pngimg.com - under_construction_PNG40.png';

export const projects: ProjectsCardType[] = [
  {
    id: 0,
    title: 'Rick and Mortypedia',
    image: rickAndMortyImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/rick-and-morty',
    deploy: 'https://rick-and-morty-three-khaki.vercel.app/',
    descriptionEng: `My first personal project in React, using Rick and Morty's API. 
      The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  
      React Router Dom, useState, useEffect, Styled-Components are some of the skills and technologies used in this project`,
    descriptionPT: `Meu primeiro projeto pessoal em React, consumindo a API do Rick and Morty.
      A aplicação consiste em uma Wikipédia do Rick and Morty e inclui um jogo da memória.
      Algumas dos técnologias e hooks usados foram React Router Dom, useState, useEffect e Styled-Components`,
  },
  {
    id: 1,
    title: 'TrybeTunes',
    image: tunesImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/tunes',
    deploy: 'https://trybe-tunes-nine-sable.vercel.app/',
    descriptionEng:
      `This application in React uses the iTunes API. The user can search for 
      artists or bands, have access of all the albums infos and play music samples.
      Also, it includes a "Favorites" feature and a "My Profile" page so you can edit
      your personal profile`,
    descriptionPT: `A aplicação em React utiliza a API do iTunes. O usuário pode procurar por
    artistas ou bandas, ter acesso a todas as informações dos álbuns e escutar um sample das músicas.
    Também inclui um recurso de "Favorites"(favoritos) e uma página "My Profile"(meu perfil) onde
    pode editar o perfil pessoal`,
  },
  {
    id: 2,
    title: 'IBGE News',
    image: IBGEImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/IBGE_News',
    deploy: 'https://ibge-news-seven.vercel.app/',
    descriptionEng:`This application in React uses IBGE API. The user have access to recent news
    published in IBGE's web site. Have a "favorites" feature and it's also possible to filter
    by "release" or "news". Also, the user can access a full version of the news or release
    by clicking in the "Leia a notícia aqui" button`,
    descriptionPT: `A aplicação em React utiliza a API do IBGE. O usuário tem acesso as notícias mais recentes
    publicadas no site do IBGE. Possui um recurso de "favoritos" e é possível filtrar por "notícias" e 
    "releases". O usuário também pode acessar a versão completa da notícia ou release clicando
    no botão "Leia a notícia aqui"`,
  },
  {
    id: 3,
    title: 'Front-End Online Store',
    image: underConstructionImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: '',
    deploy: '',
    descriptionEng:
      `Project under development`,
    descriptionPT: 'Projeto em desenvolvimento',
  },
  {
    id: 4,
    title: 'Entrée',
    image: underConstructionImg,
    categories: ['All', 'Todas', 'Freelancer', 'Full-Stack'],
    url: '',
    deploy: '',
    descriptionEng:
      `Project under development`,
    descriptionPT: 'Projeto em desenvolvimento',
  },
];