import * as S from '../Style/styles';
import { hardSkills } from '../assets/hardSkills';
import HardSkillsCard from './HardSkillsCard';

const Footer = () => {
  return(
    <S.Footer>
      <div>
        <S.H2>Hard Skills</S.H2>
      </div>
      <div className='hardSkillsContainer'>
        {hardSkills.map((skill) => <HardSkillsCard key={ skill.id } skill={ skill } />)}
      </div>
    </S.Footer>
  )
}

export default Footer;