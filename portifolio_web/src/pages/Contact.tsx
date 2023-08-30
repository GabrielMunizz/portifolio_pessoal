import * as S from '../Style/styles';
import { AiFillContacts } from 'react-icons/ai';

const Contact = () => {
  return(
    <S.Main>
      <S.ContactSection>
        <S.H2><span><AiFillContacts />Contact:</span></S.H2>
        <div>
          <h4>E-mail: gabrielmfd@gmail.com</h4>
          <h4>LinkedIn: <a href="https://www.linkedin.com/in/gabriel-muniz-dev/" target='_blank'>gabriel-muniz-dev</a></h4>
          <h4>Phone: +55 32 98486-3437</h4>
        </div>
      </S.ContactSection>
    </S.Main>
  )
}

export default Contact;