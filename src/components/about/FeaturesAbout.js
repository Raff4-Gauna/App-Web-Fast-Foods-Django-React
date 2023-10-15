
const incentives = [
  {
    name: 'Nuestro Enfoque',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/60/60481.png',
    description: 'Entendemos que tu satisfacción es fundamental. Por lo tanto, estamos dedicados a responder a tus preguntas y preocupaciones de manera oportuna y eficaz. Tu experiencia es nuestra prioridad número uno.'
  },
  {
    name: 'Tus Opiniones',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/17/17127.png',
    description: 'Valoramos tus opiniones y sugerencias, ya que creemos que son fundamentales para hacer crecer y mejorar la experiencia de compra y venta en nuestra plataforma.',
  },
  {
    name: 'Comunidad',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/14/14598.png',
    description:'Nuestro objetivo es crear una comunidad en la que te sientas escuchado y valorado. Juntos, podemos hacer que "Sendero del Sabor" sea aún mejor y más útil para todos.',
  },
]

export default function Features() {
  return (
      <div className="bg-white">
            <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
              <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                <div className="max-w-3xl">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Compromiso con los Usuarios
                  </h2>
                  <p className="mt-4 text-gray-500">
                  Nuestro compromiso con los usuarios es simple pero sólido: estamos aquí para brindarte un 
                  excelente servicio al cliente, escuchar atentamente tus comentarios y seguir mejorando la 
                  plataforma en función de tus necesidades.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                  {incentives.map((incentive) => (
                    <div key={incentive.name} className="sm:flex lg:block">
                      <div className="sm:flex-shrink-0">
                        <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  )
}
