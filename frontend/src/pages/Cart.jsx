import { useEffect, useState } from "react";

export default function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(storedCart);

  }, []);

  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-700 mb-10">
        Carrito DALIATECH 🛒
      </h1>

      {cart.length === 0 ? (

        <p className="text-2xl">
          Tu carrito está vacío.
        </p>

      ) : (

        <div className="space-y-6">

          {cart.map((item, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center"
            >

              <div>
                <h2 className="text-3xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-600">
                  {item.description}
                </p>

                <p className="text-blue-700 font-bold text-2xl mt-2">
                  ${item.price} MXN
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600"
              >
                Eliminar
              </button>

            </div>

          ))}

          <div className="bg-blue-700 text-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-4xl font-bold mb-4">
              Total:
            </h2>

            <p className="text-5xl font-bold">
              ${total} MXN
            </p>
            
            <button
  className="mt-6 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-200"
  onClick={() => alert("Pedido realizado 🚀")}
>
  Finalizar Compra
</button>

          </div>

        </div>

      )}

    </div>
  );
}
