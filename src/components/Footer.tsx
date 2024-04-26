import * as S from '../Style/footerStyle';
import { hardSkills } from '../assets/hardSkills';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import HardSkillsCard from './HardSkillsCard';
import { H2 } from '../Style/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [initialIndex, setInitialIndex] = useState(0);
  const slicedHardSkills = hardSkills.slice(initialIndex, initialIndex + 5);

  const handleNext = () => {
    setInitialIndex((prev) => prev === 5 ? 0 : 5);
  }
  const handlePrevious = () => {
    setInitialIndex((prev) => prev === 0 ? 5 : 0);
  }
  return (
    <S.Footer>
      <div>
        <H2>Hard Skills</H2>
      </div>
      <motion.div
        animate={{ y: [50, 0] }}
        transition={{ type: 'spring' }}        
        className="hardSkillsContainer"
      >
        <button
          onClick={ handlePrevious }
        >
          <GrCaretPrevious />
        </button>
        {slicedHardSkills.map((skill) => (
          <HardSkillsCard key={ skill.id } skill={ skill } />
        ))}
        <button
          onClick={ handleNext }
        >
        <GrCaretNext />
        </button>
      </motion.div>
    </S.Footer>
  );
}

export default Footer;