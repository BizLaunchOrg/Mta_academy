import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import EnrollmentPage from "./pages/EnrollmentPage";
import Program from "./pages/Program";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="app-loader" role="status" aria-live="polite" aria-label="Loading website">
        <div className="app-loader__content">
          <div className="app-loader__ring" />
          <h1 className="app-loader__title">MTA Academy</h1>
          <p className="app-loader__subtitle">Preparing your experience...</p>
        </div>
      </div>
    );
  }

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