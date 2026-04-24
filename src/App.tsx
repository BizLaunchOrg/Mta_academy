import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import EnrollmentPage from "./pages/EnrollmentPage";
import Program from "./pages/Program";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/programs" element={<Program />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;