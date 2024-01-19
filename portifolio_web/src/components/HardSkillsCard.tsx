import { HardSkillsType } from '../types';
import * as S from '../Style/styles'

type CardProps = {
  skill: HardSkillsType;
}

const HardSkillsCard = ({ skill }: CardProps) => {
  return(
    <S.HardSkillsCard>      
      <img src={skill.image} alt={skill.title} />
      <h2>{skill.title}</h2>
    </S.HardSkillsCard>
  )
}

export default HardSkillsCard;