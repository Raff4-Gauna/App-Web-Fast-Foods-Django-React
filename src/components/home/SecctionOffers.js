
const stats = [
  { label: 'Dificultad para Encontrar Ofertas y Descuentos', value: 'Los clientes desean encontrar ofertas especiales.' },
  { label: 'Sobrecarga de Opciones', value: 'Los clientes se sienten abrumados por demasiadas opciones.' },
]

export default function SecctionOffers() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-red-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-red-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://red-onion-restaurant-41dbe.web.app/assets/Image/adult-blur-blurred-background-687824.png"
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-yellow-600 opacity-70" />
              <div className="relative px-8">
                <div>
                  <img
                    className="h-14"
                    src="https://emuel-vassallo.github.io/restaurant-page/components/images/logo-dark-mode.png"
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-semibold text-white md:flex-grow">
                    <p className="relative">
                    Saborea la comodidad de recibir tus platos favoritos en tu puerta de tu hogar.
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Sarah Williams, CEO at Workcation</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comida Local a Tu Alcance: Un Mundo de Sabores
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg font-medium">
              "Hemos desarrollado una plataforma sencilla y eficaz para acercarte a los negocios locales de comida que se encuentran a tu alcance. 
              Con opciones para todos los gustos, es tan simple como elegir la comida que deseas y comenzar a disfrutar."
              </p>
              <h2 className="font-bold tracking-tight text-gray-900 sm:text-lg">
              Clientes Dificultades & Soluciones
              </h2>
              <p className="text-base font-sans leading-2">
              Exploramos los retos que enfrentan los clientes al buscar comida y cómo nuestra aplicación web resuelve estos problemas para una experiencia de compra mejorada.
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-lg">
              Vendedores: Desafíos & Soluciones
              </h2>
              <p className="text-base font-sans leading-2">
              Descubre los obstáculos que afrontan los vendedores de comida y cómo nuestra aplicación web les brinda soluciones para ampliar sus negocios de manera efectiva.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  {/* <dt className="text-lg font-semibold text-gray-500">{stat.label}</dt> */}
                  {/* <dd className="text-sm font-medium  text-gray-900">{stat.value}</dd> */}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


