
export default function PricesHome() {
  return (
    <section class="w-full pt-16 pb-20 bg-gray-50">
      <div class="px-10 mx-auto text-center max-w-7xl">
        <h2 class="text-5xl font-bold text-blue-600">Flexibles <span class="text-gray-800">Precios</span></h2>
        <p class="mt-3 text-lg text-gray-500">Se un miembro vendedor Únete hoy y potencia tu negocio de comida.</p>
        <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">
          {/* <!-- Start First Plan --> */}
          <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
            <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-green-50 rounded-2xl"></div>
            <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
            <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
              <svg class="w-16 h-16 text-green-400 rounded-2xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <div class="relative flex flex-col items-start">
                <h3 class="text-xl font-bold">Plan Basico</h3>
                <p class="tracking-tight text-gray-500">
                  <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                  <span class="text-3xl font-bold text-gray-800">00</span>
                  <span class="text-sm -translate-y-0.5 inline-block transform">/user</span>
                </p>
              </div>
            </div>

            <ul class="relative py-12 space-y-3">
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Panel de Publicación de Artículos</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Crea Categorías Personalizadas</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Soporte</span>
              </li>
            </ul>

            <a href="#" class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
              <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
              <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
              <span class="relative">Elegir Plan</span>
              <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </a>
          </div>
          {/* <!-- End First Plan --> */}

          {/* <!-- Start Middle Plan --> */}
          <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl">
            <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-2xl"></div>
            <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
            <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
              <svg class="w-16 h-16 text-indigo-400 rounded-2xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
              </svg>
              <div class="relative flex flex-col items-start">
                <h3 class="text-xl font-bold">Plan Profesional</h3>
                <p class="tracking-tight text-gray-500">
                  <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                  <span class="text-3xl font-bold text-gray-800">00</span>
                  <span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                </p>
              </div>
            </div>

            <ul class="relative py-12 space-y-3">
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Todas las ventajas anteriores</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Posicionamiento en la Web.</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Obtén acceso a las funciones Pro</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Priority Email &amp; Chat Support</span>
              </li>
            </ul>

            <a href="#" class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
              <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
              <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
              <span class="relative">Choose Plan</span>
              <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </a>
          </div>
          {/* <!-- End Middle Plan --> */}

          {/* <!-- Start Third Plan --> */}
          <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
            <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-red-50 rounded-2xl"></div>
            <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
            <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
              <svg class="w-16 h-16 text-red-400 rounded-2xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div class="relative flex flex-col items-start">
                <h3 class="text-xl font-bold">Enterprise Plan</h3>
                <p class="tracking-tight text-gray-500">
                  <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                  <span class="text-3xl font-bold text-gray-800">35</span>
                  <span class="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                </p>
              </div>
            </div>

            <ul class="relative py-12 space-y-3">
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Dedicated Design &amp; Dev Team</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Custom Design &amp; Features</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Access to 500+ Components</span>
              </li>
              <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                <svg class="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Priority Phone Support</span>
              </li>
            </ul>

            <a href="#" class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
              <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-red-400"></span>
              <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
              <span class="relative">Choose Plan</span>
              <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </a>
          </div>
          {/* <!-- End Third Plan --> */}
        </div>
      </div>
    </section>
  )
}