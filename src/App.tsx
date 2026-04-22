import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/NavBar";
// import Navbar from "./Components/NavBar";
// import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import EnrollmentPage from "./pages/EnrollmentPage";
import Program from "./pages/Program";


// import Programs from "./pages/Programs";
// import Bootcamps from "./pages/Bootcamps";

function App() {
  return (
    <>
       <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
     
         <Route path="/Enrollment" element={<EnrollmentPage />} />  
         <Route path="/programs" element={<Program />} />  
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;