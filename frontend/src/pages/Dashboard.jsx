import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const logout = () => {

    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  if (!currentUser) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold text-red-500">
          Debes iniciar sesión
        </h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10">

          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Bienvenido {currentUser.name} 🚀
          </h1>

          <p className="text-xl text-gray-600">
            {currentUser.email}
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10">

          <h2 className="text-4xl font-bold mb-8">
            Servicios en tu carrito 🛒
          </h2>

          {cart.length === 0 ? (

            <p className="text-xl">
              No tienes servicios agregados.
            </p>

          ) : (

            <div className="space-y-6">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="border rounded-2xl p-6 flex justify-between items-center"
                >

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">
                      {item.description}
                    </p>

                  </div>

                  <p className="text-2xl font-bold text-blue-700">
                    ${item.price}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

        <div className="bg-blue-700 text-white rounded-3xl shadow-2xl p-10 mb-10">

          <h2 className="text-4xl font-bold mb-4">
            Total
          </h2>

          <p className="text-5xl font-bold">
            ${total} MXN
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600"
        >
          Cerrar Sesión
        </button>

      </div>

    </div>
  );
}