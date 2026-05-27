import { useState } from "react";

export default function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Usuario registrado 🚀");

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Registro 👤
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={user.name}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={user.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800"
          >
            Registrarse
          </button>

        </div>

      </form>

    </div>
  );
}