const services = [
  {
    id: 1,
    title: "Página Empresarial",
    description:
      "Sitio web profesional para empresas y negocios modernos.",
    price: 3500,
    icon: "💼",
  },
  {
    id: 2,
    title: "Tienda Online",
    description:
      "E-commerce completo con carrito y pagos integrados.",
    price: 6000,
    icon: "🛒",
  },
  {
    id: 3,
    title: "Sistema Personalizado",
    description:
      "Sistema web desarrollado completamente a medida.",
    price: 9000,
    icon: "⚙️",
  },
];

export default function Services() {

  const addToCart = (service) => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(service);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Servicio agregado 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold text-blue-700 mb-6">
          Nuestros Servicios
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          DALIATECH ofrece soluciones digitales modernas
          para empresas, negocios y emprendedores que
          buscan crecer en internet.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {services.map((service) => (

          <div
            key={service.id}
            className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 transition duration-300"
          >

            <div className="text-7xl mb-6">
              {service.icon}
            </div>

            <h2 className="text-3xl font-bold mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="flex justify-between items-center">

              <p className="text-3xl font-bold text-blue-700">
                ${service.price}
              </p>

              <button
                onClick={() => addToCart(service)}
                className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
              >
                Agregar
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}