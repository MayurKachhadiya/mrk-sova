import About from "./pages/About";
import Team from "./pages/Team";
import Price from "./pages/Price";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allpage from "./pages/Allpage";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Allpage />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/price" element={<Price />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </Router>
  </>
  );
};

export default App;
