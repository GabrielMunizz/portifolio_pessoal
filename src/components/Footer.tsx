import * as S from '../Style/footerStyle';
import { hardSkills } from '../assets/hardSkills';
import HardSkillsCard from './HardSkillsCard';
import { H2 } from '../Style/styles';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <H2>Hard Skills</H2>
      </div>
      <motion.div
        animate={{ y: [100, 0] }}
        transition={{ type: 'spring' }}        
        className="hardSkillsContainer"
      >
        {hardSkills.map((skill) => (
          <HardSkillsCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </S.Footer>
  );
}

export default Footer;