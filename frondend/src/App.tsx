import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Atoms/Login/Login";
import Navbar from "./components/Molecules/Navbar/Navbar";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
