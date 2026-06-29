import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./context/AppContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import IndustriesPage from "./pages/IndustriesPage.jsx";
import StandardsPage from "./pages/StandardsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/standards" element={<StandardsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <Toast />
      </AppProvider>
    </HelmetProvider>
  );
}
