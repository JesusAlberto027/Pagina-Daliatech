import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Templates from "./pages/Templates";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <BrowserRouter>

        <div className="min-h-screen bg-white dark:bg-gray-900 transition duration-500">

          <Navbar />

          <div className="fixed bottom-6 right-6 z-50">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/templates"
              element={<Templates />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

          </Routes>

        </div>

      </BrowserRouter>

    </div>
  );
}