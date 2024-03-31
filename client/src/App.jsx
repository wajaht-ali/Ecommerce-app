/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Register from './pages/Auth/Register.jsx';
import Login from './pages/Auth/Login.jsx';
import Dashboard from './pages/user/Dashboard.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import AdminRoute from "../src/components/routes/AdminRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      {/* User Dashboard */}
      <Route path='/dashboard' element={<PrivateRoute />} >
        <Route path='user' element={<Dashboard />} />
      </Route>
      {/* Admin Dashboard */}
      <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
