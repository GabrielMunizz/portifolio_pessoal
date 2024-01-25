export type HeaderProps = {
  toggleTheme: () => void;
  isDark: boolean;
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