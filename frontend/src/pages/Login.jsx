import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(
      (user) =>
        user.email === form.email &&
        user.password === form.password
    );

    if (userFound) {

      localStorage.setItem(
        "currentUser",
        JSON.stringify(userFound)
      );

      alert("Login exitoso 🚀");

      navigate("/dashboard");

    } else {

      alert("Usuario o contraseña incorrectos");

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Login 🔐
        </h1>

        <div className="space-y-6">

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800"
          >
            Iniciar Sesión
          </button>

        </div>

      </form>

    </div>
  );
}