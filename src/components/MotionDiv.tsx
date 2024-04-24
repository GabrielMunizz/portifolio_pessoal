import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';

const MotionDiv = () => {
  const { isChanging } = useContext(PortifolioContext);
  return (
    <AnimatePresence>
      {
        isChanging && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            style={{
              backgroundColor: '#000',
              width: '100%',
              height: '100vh',
              zIndex: '100',
            }}
          />      
        )
      }
    </AnimatePresence>
  );
}

export default MotionDiv;