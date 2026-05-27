import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {

    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg px-10 py-5 flex justify-between items-center">

      <Link
        to="/"
        className="text-4xl font-black text-blue-700"
      >
        DALIATECH
      </Link>

      <div className="flex items-center gap-6 text-lg font-medium">

        <Link
          to="/"
          className="hover:text-blue-700 transition"
        >
          Inicio
        </Link>

        <Link
          to="/services"
          className="hover:text-blue-700 transition"
        >
          Servicios
        </Link>

        <Link
          to="/templates"
          className="hover:text-blue-700 transition"
        >
          Plantillas
        </Link>

        <Link
          to="/cart"
          className="hover:text-blue-700 transition"
        >
          Carrito
        </Link>

        {currentUser ? (

          <>
            <Link
              to="/dashboard"
              className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>

        ) : (

          <>
            <Link
              to="/login"
              className="hover:text-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
            >
              Register
            </Link>
          </>

        )}

      </div>

    </nav>
  );
}