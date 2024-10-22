import Description from "@/components/Description";
import Stacks from "@/components/Stacks";
import Container from "@/components/Container";
import { useContext } from "react";
import PorfolioContext from "../context/PortfolioContext";
import Image from "next/image";
import gridBG from "../../assets/grid.png";
import colorPhoto from '../../assets/foto_port_filtro-fotor-bg-remover-20231017175655.png';

export default function AboutMe() {
  const { homeRef } = useContext(PorfolioContext);
  
  return (
    <Container containerRef={homeRef}>     
      <div className="
          flex flex-col relative 
          items-center w-full h-full 
          z-10 px-4
          lg:px-[5rem]
          xl:px-4
          xl:w-[60%] xl:ml-[2rem]
          2xl:w-[40%]          
        ">
        <Description />
        <div className="
            absolute top-16 w-[20rem] h-[20rem]
            rounded-[50%] overflow-hidden z-0
            opacity-30
            md:w-[30rem] md:top-3 md:left-0
            md:h-[35rem]
            lg:left-[5rem]
            xl:left-0
          ">
          <Image 
            className="w-full h-full" 
            src={gridBG} 
            alt="grid background" 
          />
        </div>
      </div>

      <div className="
          hidden xl:flex flex-col
          relative justify-start items-center 
          w-[50%] h-full 
          xl:pl-[0%] xl:pt-[0.6px] 
          2xl:pt-[0.3px]
        ">
        <Image
          className="
            md:rounded-[50%] md:w-[15rem] 
            md:h-[14rem] md:mt-[1.5rem] 
            md:z-10 md:object-cover 
            md:object-[center_30%] 
            xl:rounded-[5px] xl:w-full 
            xl:h-full xl:mt-0            
          "
          src={colorPhoto}
          alt="Gabriel's picture"
        />
        <div className="
            hidden absolute 
            left-0
            w-[50%] h-full 
            bg-gradient-to-r from-black 
            via-black  
            to-transparent z-[15]
            xl:block xl:via-black/80
            xl:h-[99.9%]
            2xl:left-0 2xl:h-full         
          " 
        />
      </div>
      

      <Image
        className="
          absolute rounded-[50%] object-cover 
          w-[7rem] h-[7rem] z-10 right-[5%] top-4
          sm:w-[10rem] sm:h-[10rem]
          md:right-10 md:top-5 md:w-[15rem] md:h-[15rem]
          lg:right-[5rem] lg:w-[20rem] lg:h-[20rem] 
          xl:hidden
        "
        src={colorPhoto}
        alt="Gabriel's mobile picture"
      />

      <div className="
          flex-col absolute
          justify-center items-start 
          w-full bottom-0 z-40 
          md:flex md:pl-[3%]
          lg:mb-[1rem] lg:bottom-[5%]
          xl:mb-0 xl:bottom-0
        ">
        <Stacks />
        <div
          className="
            absolute bg-gradient-to-r 
            w-[12%] h-[70%]                        
            from-black via-black 
            to-transparent z-10
            top-[15%]
            sm:top-[30%] left-0
            lg:left-[1%]                                                                 
          "
        />

        <div
          className="
            absolute bg-gradient-to-l 
            w-[12%] h-[70%]
            from-black via-black 
            to-transparent z-10 
            top-[15%] right-0
            sm:top-[30%]
            lg:right-[1%]
            xl:right-[45%]                     
          "
        />
      </div>
    </Container>
  );
}