import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
