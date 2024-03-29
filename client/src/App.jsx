/* eslint-disable no-unused-vars */
import './styles/App.css';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { Routes, Route } from "react-router-dom";
import Register from './pages/Auth/Register.jsx';
import Login from './pages/Auth/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
