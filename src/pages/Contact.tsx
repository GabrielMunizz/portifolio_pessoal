import { useContext } from 'react';
import * as S from '../Style/contactStyle';
import { H2 } from '../Style/mainStyle';
import { AiFillContacts } from 'react-icons/ai';
import PortifolioContext from '../context/PortifolioContext';
import MotionDiv from '../components/MotionDiv';

const Contact = () => {
  const { isChanging } = useContext(PortifolioContext);
  return(
    <>
      <MotionDiv />
      
      {!isChanging && (
        <S.Contact>
        <S.ContactSection>
          <H2>
            <span><AiFillContacts />Contact:</span>
          </H2>
          <div>
            <h4>E-mail: gabrielmfd@gmail.com</h4>
            <h4>LinkedIn: <a href="https://www.linkedin.com/in/gabriel-muniz-dev/" target='_blank'>gabriel-muniz-dev</a></h4>
            <h4>Phone: +55 32 98486-3437</h4>
          </div>
        </S.ContactSection>
      </S.Contact>
      )}
    </>
  )
}

export default Contact;