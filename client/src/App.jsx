/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import Home from "./pages/Home.jsx";

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
import Products from "./pages/Admin/Products.jsx";
import UpdateProduct from "./pages/Admin/UpdateProduct.jsx";
// import AllProducts from "./components/Home/Products.jsx";
import AllProducts from "./pages/Home/Products.jsx";
import Search from "./pages/Search.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartPage from "./pages/CartPage.jsx";
import UpdateUser from "./pages/Admin/UpdateUser.jsx";
import Chat from "./pages/chat/Chat.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path="/ask" element={<Chat />} />
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
        <Route path='admin/products' element={<Products />} />
        <Route path="admin/update-product/:slug" element={<UpdateProduct />} />
        <Route path='admin/users' element={<Users />} />
        <Route path='admin/update-user/:id' element={<UpdateUser />} />
      </Route>

      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App