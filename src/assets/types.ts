export type HeaderProps = {
  toggleTheme: () => void,
  isDark: boolean,
};

export type HardSkillsType = {
  id: number,
  title: string,
  image: string,
}

export type ProjectsCardType = {
  id: number,
  title: string,
  image: string,
  categories: string[],
  url: string,
  deploy: string,
  descriptionEng: string,
  descriptionPT: string,
}

export type CategoriesType = string[];

export type ApplicationTxtType = {
  professional: string[],
  contact: string,
  intro: {
    head: string,
    title: string,
    bioPreview: string,
  },
  seeFullBio: string,
  header: {    
    projects: string,
    contact: string,
  },
}