import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import ChooseSchool from "./pages/ChooseSchool";
import SelectSubject from "./pages/SelectSubject";
import SelectPaper from "./pages/SelectPaper";
import Questions from "./pages/Questions";
import Subscribe from "./pages/Subscribe"; 
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Account Creation */}
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />

        {/* Cards Page */}
        <Route path="/cards" element={<CardsPage />} />

        {/* University School Selection */}
        <Route path="/choose-school" element={<ChooseSchool />} />
        <Route path="/select-subject" element={<SelectSubject />} />
        <Route path="/select-paper" element={<SelectPaper />} />
        <Route path="/questions/:subject/:paper" element={<Questions />} />
        <Route path="/subscribe" element={<Subscribe />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;