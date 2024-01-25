import * as S from '../Style/footerStyle';
import { hardSkills } from '../assets/hardSkills';
import HardSkillsCard from './HardSkillsCard';
import { H2 } from '../Style/styles';

const Footer = () => {
  return(
    <S.Footer>
      <div>
        <H2>Hard Skills</H2>
      </div>
      <div className='hardSkillsContainer'>
        {hardSkills.map((skill) => <HardSkillsCard key={ skill.id } skill={ skill } />)}
      </div>
    </S.Footer>
  )
}

export default Footer;