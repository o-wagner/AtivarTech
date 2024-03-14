import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";


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
      <PrismicProvider client={client}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </PrismicProvider>
    </ThemeProvider>
  )
}

export default App
