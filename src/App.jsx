import "./App.css";

import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import SignIn from "./pages/signin-login/SignIn";
import Login from "./pages/signin-login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  toast("test");
  return (
    <>
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product" element={<Product />} />

        {/* private Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
