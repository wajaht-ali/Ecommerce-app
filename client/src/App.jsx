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
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import Users from "./pages/Admin/Users.jsx";
import Profile from './pages/user/Profile.jsx';
import Orders from './pages/user/Orders.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import AdminRoute from "../src/components/routes/AdminRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      {/* User Dashboard */}
      <Route path='/dashboard' element={<PrivateRoute />} >
        <Route path='user' element={<Dashboard />} />
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/orders' element={<Orders />} />
      </Route>
      {/* Admin Dashboard */}
      <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/create-product' element={<CreateProduct />} />
        <Route path='admin/create-category' element={<CreateCategory />} />
        <Route path='admin/users' element={<Users />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App