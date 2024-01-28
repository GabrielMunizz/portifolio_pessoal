import { useContext } from 'react';
import { fullBioTxt } from '../assets/fullBioTxt';
import PortifolioContext from '../context/PortifolioContext';

const AboutMe = () => {
  const { isBr } = useContext(PortifolioContext)
  return(
    <>
      <h1>{ isBr ? 'Sobre mim' : 'About me' }</h1>
      {isBr ? 
      <p>
          Mesmo antes de me formar em Administração de Empresas, lá em 2013, já trabalhava na área como assistente administrativo.
          Trabalhei muito, me esforcei e consegui ter meu próprio negócio, só para perceber que não era o que eu queria fazer da minha vida.
            
          <br/>
          <br/>
          Foi um pouco assustador me dar conta disso, principalmente depois dos 30 anos de idade. 
          Então bateu aquele frio na barriga com a ideia de começar uma carreira do zero novamente. 
          Mas me ocorreu que, se não tomasse essa decisão, iria me arrepender pelo resto da vida. 
          Porém, depois dessa decisão, vinha outro problema: O que fazer? Qual área seguir? Tinha que ser algo que fosse levar para a vida.
          
          <br/>
          <br/>
          Resolver quebra-cabeças sempre foi uma das coisas que mais gostei de fazer. Palavras-cruzadas, desvendar mistérios em livros,
          descobrir quem é o vilão em séries... Mas nunca tinha relacionado essas coisas com resolução de problemas, 
          ou sequer programação.
        
          <br/>
          <br/>

          Porém, quando você realmente quer alguma coisa, a vida tende a te colocar no caminho certo. Já aconteceu comigo algumas vezes. 
          E, dessa vez, não foi diferente. Ao navegar pela internet, me deparei com um vídeo de uma pessoa que mudou de carreira depois 
          dos 30 anos e tinha conseguido aprender programação em desenvolvimento web sozinha, fazendo cursos grátis online e assistindo vídeos. 
          Aquilo abriu minha mente. Comecei a procurar mais programação, mais especificamente o JavaScript. 
          <br />
          Comecei a fazer um curso grátis de JavaScript no www.freecodecamp.org e vi onde minha paixão por quebra-cabeças podia se encaixar na 
          minha vida profissional: Programação. 
          <br />
          Desde então, foi um caminho sem volta. Terminei o curso do freeCodeCamp, comecei a fazer um curso na RocketSeat, 
          aprendi mais sobre HTML e CSS, depois fui para a Trybe, onde pude me aprofundar realmente em desenvolvimento web.
          
          <br/>
          <br/>

          Após aprender sobre Front-End com React, Redux, Styled-Components, estou estudando Back-End com Node.JS e Sequelize 
          (também dou uma estudada em Go nas horas vagas). Meu objetivo é atuar como desenvolvedor Full-Stack. Graças a mais de 10 anos em administração,
          trabalhei muito com pessoas e pude desenvolver bastante a minha comunicação, trabalho em equipe e soft-skills. Percebi que ser objetivo 
          e claro no mundo da programação pode evitar muitos bugs.

          <br/>
          <br/>

          O que mais aprendi nessa jornada é que não se pode desistir dos sonhos e muito menos achar que é tarde para recomeçar. É melhor começar tarde do que nunca.
          A vida passa rápido, portanto que seja prazerosa em todos os aspectos!

          Se leu até aqui, muito obrigado pelo seu tempo.

          Gabriel Muniz
      </p> 
      : 
      fullBioTxt}
    </>
  )
}

export default AboutMe;