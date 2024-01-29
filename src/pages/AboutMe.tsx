import { useContext } from 'react';
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
        Porém, depois disso, vinha outro problema: O que fazer? Qual caminho seguir? 
        Tinha que ser algo que fosse levar para a vida.
        <br/>
        <br/>
        Resolver quebra-cabeças sempre foi uma das coisas que mais gostei de fazer. Palavras-cruzadas, desvendar mistérios em livros,
        descobrir quem é o vilão em séries... Mas nunca tinha relacionado essas coisas com programação.
        <br/>
        <br/>
        Porém, quando você realmente quer alguma coisa, a vida tende a te colocar no caminho certo. Já aconteceu comigo algumas vezes 
        e, dessa vez, não foi diferente. Ao navegar pela internet, me deparei com um vídeo de uma pessoa que mudou de carreira depois 
        dos 30 anos e tinha conseguido aprender programação em desenvolvimento web sozinha, fazendo cursos grátis online e assistindo vídeos. 
        Aquilo abriu minha mente. Comecei a procurar mais conteúdo sobre programação, mais especificamente o JavaScript. 
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
        <br/>
        <br/>
        Se leu até aqui, muito obrigado pelo seu tempo.
        <br/>
        <br/>
        Gabriel Muniz
      </p> 
      : 
      <p>
        Even before I graduate in Business Administration, back in 2013, I've already worked in the area as a administrative assistant.
        Worked hard, pushed myself and managed to have my own business, just to realize that it wasn't what I wanted to do for the rest
        of my life.
        <br/>
        <br/>
        It was a little bit scary to realize that, specially having over 30 years old.
        So I had that sensation of butterflies in my stomach, over the idea of starting a new
        carrer from scratch again. But it occurred to me that if I didn't make that decision,
        I was going to regret it for the rest of my life. However, after that, comes another issue:
        What am I going to do? Which path am I going to take?
        <br/>
        <br/>
        Solving puzzles is something that always I enjoyed to do. Cross-words, solving the mistery in books,
        finding who's the villain in the movie or series... But never related that with programming.
        <br/>
        <br/>
        But when you really want something, life tends to put you in the right path. It already happened to me sometimes, and, this time,
        it wasn't different. Browsing in the internet, i came across a video of a person that changed his professional carrer after
        his 30 years old and managed to become a self taught web developer programmer, by doing free online courses and watching tutorials.
        That opened my mind. I started looking more content about programming, JavaScript especifically.
        <br/>        
        I started a online free course in JavaScript at www.freecodecamp.org and realized where my passion for puzzles could fit
        in my professional life: programming.
        <br/>        
        Since then it was a point of no return. I've finished freeCodeCamp course, started doing another one at RocketSeat,
        learned more about HTML and CSS, then I took Trybe's web development course and delved deeper into JavaScript.
        <br/>
        <br/>
        After I learned about Front-End with React, Redux and Styled-Components, I'm current studying Back-End with Node.JS and
        Sequelize (also studying Go in my spare time). My objective is to act as a Full-Stack developer. Thanks to more than 10 years in Business Administration,
        I've worked a lot with people, so I could grow my communication, team-work and soft-skills. I've come to realize that beeing objective and clear
        in thr programming world can avoid many bugs.
        <br/>
        <br/> 
        What I've learned most on this journey is that you can't give up on your dreams and think it's too late to start over.
        It's better to start late than never. Life goes by quickly, so make it enjoyable in every aspect!
        <br/>
        <br/>
        If you've read this far, thank you very much for your time.
        <br/>
        <br/>
        Gabriel Muniz
      </p>
      }
    </>
  )
}

export default AboutMe;