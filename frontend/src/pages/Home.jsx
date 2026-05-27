import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* HERO SECTION */}
      <section className="bg-blue-700 text-white py-28 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-6xl font-bold leading-tight mb-8">
              Creamos páginas web modernas para tu negocio 🚀
            </h1>

            <p className="text-2xl text-blue-100 mb-10">
              DALIATECH desarrolla sitios web empresariales,
              tiendas online y sistemas personalizados
              totalmente profesionales.
            </p>

            <div className="flex gap-6">

              <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
                Ver Servicios
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition">
                Contactar
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="web development"
              className="rounded-3xl shadow-2xl w-full max-w-xl"
            />

          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-blue-700 mb-6">
              Nuestros Servicios
            </h2>

            <p className="text-xl text-gray-600">
              Soluciones digitales modernas para empresas y emprendedores.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <div className="text-7xl mb-6">💼</div>

              <h3 className="text-3xl font-bold mb-4">
                Página Empresarial
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Sitios web corporativos modernos para negocios.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <div className="text-7xl mb-6">🛒</div>

              <h3 className="text-3xl font-bold mb-4">
                Tienda Online
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Ecommerce completo con carrito y pagos.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <div className="text-7xl mb-6">⚙️</div>

              <h3 className="text-3xl font-bold mb-4">
                Sistemas Web
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Desarrollo personalizado para empresas.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PLANTILLAS */}
      <section className="bg-white py-24 px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-blue-700 mb-6">
              Plantillas Web
            </h2>

            <p className="text-xl text-gray-600">
              Diseños modernos listos para usar.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-50 hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Template Empresarial
                </h3>

                <p className="text-gray-600 mb-6">
                  Ideal para negocios y empresas modernas.
                </p>

                <p className="text-3xl font-bold text-blue-700">
                  $2500 MXN
                </p>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-50 hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Template Restaurante
                </h3>

                <p className="text-gray-600 mb-6">
                  Diseño elegante para restaurantes y cafeterías.
                </p>

                <p className="text-3xl font-bold text-blue-700">
                  $3000 MXN
                </p>

              </div>

            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-50 hover:scale-105 transition">

              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Template Ecommerce
                </h3>

                <p className="text-gray-600 mb-6">
                  Perfecto para tiendas online modernas.
                </p>

                <p className="text-3xl font-bold text-blue-700">
                  $5000 MXN
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-12 text-center">

        <h2 className="text-4xl font-bold mb-4">
          DALIATECH
        </h2>

        <p className="text-blue-100">
          Desarrollo Web Profesional © 2026
        </p>

      </footer>

    </motion.div>
  );
}