import "./App.css";

import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";

import SignUp from "./pages/signin-login/SignUp";
import SignIn from "./pages/signin-login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import BookList from "./pages/book/BookList";
import EditBook from "./pages/book/EditBook";
import AddNewBook from "./pages/book/AddNewBook";
import StudentList from "./pages/user/StudentList";
import AllBurrowList from "./pages/burrows/AllBurrowList";
import { MyBurrows } from "./pages/burrows/MyBurrows";
import AdminList from "./pages/user/AdminList";
import UserProfile from "./pages/user/UserProfile";

function App() {
  toast("test");
  return (
    <>
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        {/* private Routes */}

        {/* admins only */}

        <Route path="admin/books" element={<BookList />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        <Route path="admin/edit/:_id" element={<EditBook />} />

        <Route path="admin/students" element={<StudentList />} />
        <Route path="admin/all-burrows" element={<AllBurrowList />} />

        <Route path="admin/admins" element={<AdminList />} />

        {/* both admin and students */}
        <Route path="admin/profile" element={<UserProfile />} />
        <Route path="admin/my-burrows" element={<MyBurrows />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
