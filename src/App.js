import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import BusTracker from "./components/BusTracker";
import Middle from "./components/Middle";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/enter" element={<LoginPage />} />
        <Route path="/bustrack" element={<BusTracker/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/middle" element={<Middle/>}/>
      </Routes>
    </Router>
  );
};

export default App;
