import 'boxicons'

import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import DotLoader from 'react-spinners/DotLoader';

const features = [
  {
    name: 'Sendero Del Sabor',
    description: 'Desde tu local favorito, hasta la puerta de tu casa. Descubre cómo conectamos a los amantes de la comida con los sabores locales.',
  },
  {
    name: 'Regístrate como Vendedor',
    description: 'Únete a nuestra comunidad. Registra tu local y comienza a vender tus delicias sin costo alguno.',
  },
  {
    name: 'Explora Locales',
    description: 'Navega a través de una variedad de los locales. Encuentra tus sabores favoritos.',
  },
  {
    name: 'Categorías',
    description: 'Explora platos deliciosos organizados en categorías para una mejor experiencía.',
  },
  { 
    name: 'Rápido y Fácil',
    description: 'Personaliza tu pedido según tus preferencias. Sin complicaciones, solo buenos sabores.',
  },
  {
    name: 'Comunicación Directa',
    description: 'Agrega tus platos al carrito, confirma la compra y tus detalles se envían automáticamente al vendedor.',
  },
  {
    name: 'Notificaciones en Tiempo Real',
    description: 'Recibe notificaciones instantáneas sobre el estado de tu compra, ofertas especiales y actualizaciones de tus locales favoritos.',
    
  },
  {
    name: 'Explora el Futuro',
    description: 'Estamos creciendo y mejorando constantemente. Mantente atento a nuevas características y sorpresas emocionantes que vendrán próximamente.',
  },
]

export default function SecctionWelcome() {

  
  return (
  <div className="bg-orange-50">
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-black tracking-wide uppercase">
          BIENVENIDO A <span class="bg-orange-button text-black px-1 rounded">NUESTRA PLATAFORMA</span>
        </h2>
      </div>
      <div className=" mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">

        {/* Tarjeta 1 - Sendero Del Sabor */}
        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <box-icon name='globe' animation='flashing' ></box-icon>
              </div>
              <h6 className="text-xl font-semibold">Sendero Del Sabor</h6>
              <p className="mt-2 mb-4 text-gray-600 text-inherit">
              ¡Con una amplia variedad de lugares! Desde tu local favorito,<span class="bg-red-400 text-black px-1 rounded">hasta la puerta de tu casa.</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Tarjeta 2 - Oportunidad de Negocio */}
        <div className="w-full md:w-4/12 px-4 text-center ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <box-icon name='search-alt-2' type='solid' animation='flashing' ></box-icon>
              </div>
              <h6 className="text-xl font-semibold">Oportunidad de Negocio</h6>
              <p className="mt-2 mb-4 text-gray-600 text-inherit">
                Convierte tu pasión por la comida en un empredimiento exitoso.<span class="bg-sky-300 text-black px-1 rounded">¡Únete ahora a nuestra plataforma y comienza a vender!</span> 
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Explora el Futuro */}
        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <box-icon name='bell' type='solid' animation='flashing' ></box-icon>
              </div>
              <h6 className="text-xl font-semibold">Explora el Futuro</h6>
              <p className="mt-2 mb-4 text-gray-600 text-inherit">
                Estamos creciendo y mejorando constantemente.<span class="bg-green-300 text-black px-1 rounded">Mantente atento a nuevas características y sorpresas emocionantes que vendrán próximamente.</span> 
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    </div>
  </div>

  );
}


 {/* <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                <box-icon name="check" animation="flashing" color="#0c0c0c"></box-icon>
              </div>
              <dt>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl> */}