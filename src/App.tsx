import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Style/globalStyle";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { darkMode, lightMode } from "./Style/themes";
import { useState } from "react";
import Layout from "./components/Layout";
import PortifolioContext from "./context/PortifolioContext";
import NavBar from "./components/NavBar";

function App() {
  const [isBr, setIsBr] = useState(false);
  const [orderBy, setOrderBy] = useState("Newest");
  const [selected, setSelected] = useState("All");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleClick = (route: string) => {
    const thisRoute = window.location.pathname;
    if (route === thisRoute) {
      return;
    }
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 800);
  };

  const selectedTheme = isDark ? darkMode : lightMode;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <PortifolioContext.Provider
      value={{
        isBr,
        setIsBr,
        selected,
        setSelected,
        orderBy,
        setOrderBy,
        isChanging,
        handleClick,
      }}
    >
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={<Layout toggleTheme={toggleTheme} isDark={isDark} />}
          >
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/refactor" element={<NavBar />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </PortifolioContext.Provider>
  );
}

export default App;
