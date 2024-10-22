import { useContext } from "react";
import FlipTab from "./FlipTab";
import PorfolioContext from "@/app/context/PortfolioContext";

export default function NavBar() {
  const { homeRef, projectsRef, contactMeRef } = useContext(PorfolioContext);
  
  return (
    <nav
      className="
        flex fixed justify-center items-center 
        w-[90%] border-2 border-white z-50 
        mt-4 min-h-10 rounded-lg bg-black 
        sm:w-[80%]
        md:min-h-[8%]
        lg:w-[70%] lg:min-h-[6%] 
        xl:w-[60%] 
        2xl:w-[50%]
        3xl:w-[40%]
      "
    >
      <ul className="flex flex-row justify-around min-w-full">
        <FlipTab targetRef={homeRef}>Home</FlipTab>
        <FlipTab targetRef={projectsRef}>Projects</FlipTab>
        <FlipTab targetRef={contactMeRef}>Contact-me</FlipTab>
      </ul>
    </nav>
  );
}
