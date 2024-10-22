
export default function Description() {
  return (
    <div
      className="
        flex flex-col relative justify-start 
        w-full h-full mb-[2rem]
        md:px-0 z-10        
      "
    >
      <div
        className="
          flex flex-col justify-start items-start 
          h-[30%] w-full 
          md:h-[38%]
        "
      >
        <h1
          className="
            bebas text-[4rem]
            font-bold mb-[-2.9rem]
            sm:text-[6rem] sm:mb-[-4.3rem] 
            md:text-[8rem] md:mb-[-5.8rem]
            xl:text-[5rem] xl:mb-[-3.6rem]                      
            2xl:mb-[-5.8rem] 2xl:text-[8rem]
          "
        >
          Gabriel
        </h1>
        <h1
          className="
            bebas text-[4rem] text-purple-600
            font-bold mb-[-1.5rem]
            sm:text-[6rem] sm:mb-[-2.5rem]
            md:text-[8rem] md:mb-[-3rem] 
            xl:text-[5rem] xl:mb-[-1.6rem]
            2xl:text-[8rem]  
          "
        >
          Muniz
        </h1>
        <h3 className="md:text-[1.5rem] italic md:mt-[-0.5rem]">
          Full Stack Developer
        </h3>
      </div>

      <p
        className="
          bebas text-[1.12rem] 
          sm:text-[1.3rem] 
          md:text-[1.5rem] md:leading-9                    
          lg:leading-8 lg:w-[70%] lg:text-[1.7rem] lg:mt-[1rem]
          xl:w-full xl:text-[1.5rem] xl:leading-5 xl:mt-[0.5rem]       
          2xl:leading-7 2xl:mt-0
        "
      >
        Passionate about technology, music and games. I also try my luck in the
        kitchen on the weekends. Since I was a child, I’ve always loved games
        and was curious about how they were made. When I went to college, I
        wrote my graduation thesis on marketing of video games. Later, I decided
        to go further and started to learn how to code, focusing on web
        development. I have experience in JavaScript (React, React Native, Node,
        Sequelize, Express) and Python (Django).
      </p>
    </div>
  );
}

