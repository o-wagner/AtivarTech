import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState('dark')
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
