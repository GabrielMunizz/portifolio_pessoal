import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Style/globalStyle'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import FullBio from './pages/FullBio'
import { darkMode, lightMode } from './Style/themes'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const selectedTheme = isDark ? darkMode : lightMode;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  }
  
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <Home toggleTheme={ toggleTheme } isDark={ isDark } /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/fullbio' element={ <FullBio />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
