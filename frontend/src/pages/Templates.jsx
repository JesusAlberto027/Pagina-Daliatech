const templates = [
  {
    id: 1,
    title: "Template Empresarial",
    category: "Negocios",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },

  {
    id: 2,
    title: "Template Restaurante",
    category: "Comida",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },

  {
    id: 3,
    title: "Template Ecommerce",
    category: "Tienda Online",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
];

export default function Templates() {

  const addToCart = (template) => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(template);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Plantilla agregada 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold text-blue-700 mb-6">
          Plantillas Web
        </h1>

        <p className="text-xl text-gray-600">
          Diseños modernos listos para usar.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {templates.map((template) => (

          <div
            key={template.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={template.image}
              alt={template.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <p className="text-blue-700 font-bold mb-2">
                {template.category}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {template.title}
              </h2>

              <p className="text-3xl font-bold text-gray-800 mb-6">
                ${template.price}
              </p>

              <button
                onClick={() => addToCart(template)}
                className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
              >
                Agregar al carrito
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}