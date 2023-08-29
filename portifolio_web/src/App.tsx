import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Style/globalStyle'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
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
      </Routes>
    </ThemeProvider>
  )
}

export default App
