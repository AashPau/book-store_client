import "./App.css";

import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";

function App() {
  toast("test");
  return (
    <>
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<Home />} />

        {/* private Routes */}
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
