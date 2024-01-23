import { ProjectsCardType } from '../types'
import rickAndMortyImg from '../images/projectsImages/rickAndMorty.png';
import tunesImg from '../images/projectsImages/trybeTunes.png';
import IBGEImg from '../images/projectsImages/IBGENews.png'

export const projects: ProjectsCardType[] = [
  {
    id: 0,
    title: 'Rick and Mortypedia',
    image: rickAndMortyImg,
    url: 'https://github.com/GabrielMunizz/rick-and-morty',
    deploy: 'https://rick-and-morty-three-khaki.vercel.app/',
    descriptionEng: `My first personal project in React, using Rick and Morty's API. 
      The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  
      React Router Dom, useState, useEffect, Styled-Components are some of the skills used in this project`,
    descriptionPT: '',
  },
  {
    id: 1,
    title: 'TrybeTunes',
    image: tunesImg,
    url: 'https://github.com/GabrielMunizz/tunes',
    deploy: 'https://trybe-tunes-nine-sable.vercel.app/',
    descriptionEng:
      "My first personal project in React, using Rick and Morty's API. The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  React Router Dom, useState, useEffect, Styled-Components are some of the skills used in this project.",
    descriptionPT: '',
  },
  {
    id: 2,
    title: 'IBGE News',
    image: IBGEImg,
    url: 'https://github.com/GabrielMunizz/IBGE_News',
    deploy: 'https://ibge-news-seven.vercel.app/',
    descriptionEng:
      "My first personal project in React, using Rick and Morty's API. The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  React Router Dom, useState, useEffect, Styled-Components are some of the skills used in this project.",
    descriptionPT: '',
  },
  {
    id: 3,
    title: 'Front-End Online Store',
    image: '',
    url: '',
    deploy: '',
    descriptionEng:
      "My first personal project in React, using Rick and Morty's API. The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  React Router Dom, useState, useEffect, Styled-Components are some of the skills used in this project.",
    descriptionPT: '',
  },
  {
    id: 4,
    title: 'Entrée',
    image: '',
    url: '',
    deploy: '',
    descriptionEng:
      "My first personal project in React, using Rick and Morty's API. The application consists in a Rick and Morty's 'Wikipedia' and includes a memory game.  React Router Dom, useState, useEffect, Styled-Components are some of the skills used in this project.",
    descriptionPT: '',
  },
];