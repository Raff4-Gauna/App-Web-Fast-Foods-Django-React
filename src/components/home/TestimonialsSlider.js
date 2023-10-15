import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  useEffect(() => {}, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };


  const testimonials = [
    {
      name: "Laura Hernandez",
      position: "Chef de Sushi",
      imageSrc:
        "https://images.unsplash.com/photo-1559637621-d766677659e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "¡Increíble plataforma! Como chef de sushi, me permite llegar a más amantes de la comida japonesa. La respuesta de los clientes ha sido fenomenal.",
    },
    {
      name: "Carlos Ramirez",
      position: "Propietario de Pizzería",
      imageSrc:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80",
      description:
        "Me uní como vendedor y en pocos días vi un aumento significativo en las ventas. La plataforma es fácil de usar y realmente efectiva.",
    },
    {
      name: "Ana López",
      position: "Foodie Entusiasta",
      imageSrc:
        "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "He descubierto restaurantes locales increíbles gracias a esta aplicación. ¡Es como un tesoro escondido de sabores!",
    },
    {
      name: "Juan Rodriguez",
      position: "Dueño de Food Truck",
      imageSrc:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "Como propietario de un food truck, esta plataforma ha impulsado mi negocio. Los pedidos en línea y las notificaciones en tiempo real son geniales.",
    },
    {
      name: "María Sánchez",
      position: "Chef de Postres",
      imageSrc:
        "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=673&q=80",
      description:
        "¡Una aplicación increíble para los amantes de los postres! He expandido mi negocio de repostería gracias a la exposición local que ofrece.",
    },
    {
      name: "Eduardo Torres",
      position: "Cliente Frecuente",
      imageSrc:
        "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      description:
        "Esta plataforma ha simplificado mi vida. Hago pedidos de mi comida favorita de forma rápida y personalizada. ¡Una experiencia deliciosa!",
    },
    // Agrega más testimonios según sea necesario
  ];

  return (
    <main>
      <div className="bg-orange-50">
      <div className="relative overflow-hidden py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="mx-auto text-center max-w-3xl">
          <h3 className="mb-6 text-5xl font-bold">Testimonios</h3>
          <p className="font-semibold mb-6 pb-2 md:mb-12 md:pb-0">
            <span class="bg-[#ece144ee] text-black px-1 rounded">"Opiniones que cuentan nuestra historia."</span>
          </p>
        </div>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="mx-auto max-w-md">
                <div className="rounded-lg overflow-hidden shadow-lg bg-yellow- dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-32 bg-[#e9df57]"></div>
                  <div className="mx-auto -mt-16 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      className="w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">
                      {testimonial.name}
                    </h4>
                    <hr className="my-4" />
                    <p className="text-gray-900 dark:text-white">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </main>
  );
};

export default TestimonialsSlider;



//  {/* Slider de testimonios */}
//  <Slider {...sliderSettings}>
//  {testimonials.map((testimonial, index) => (
//    <div key={index}>
//      <div className="overflow-hidden rounded-lg p-4 mx-auto max-w-md">
//        <figure className="rounded-2xl bg-white p-6 border border-gray-900 shadow-lg ring-1 ring-gray-900/5">
//          <figcaption className="mb-6 flex items-center gap-x-4">
//            <img
//              className="h-10 w-10 rounded-full bg-gray-50"
//              src={testimonial.imageSrc}
//              alt=""
//            />
//            <div>
//              <div className="font-semibold text-black">
//              @{testimonial.name}
//              </div>
//              <div className="text-gray-600">{testimonial.position}</div>
//            </div>
//          </figcaption>
//          <blockquote className="text-gray-900">
//          <span className="text-gray-950 font-circular-medium">
//            <p>{testimonial.description}</p>
//            </span>
//          </blockquote>
//        </figure>
//      </div>
//    </div>
//  ))}
// </Slider>


///////////////////////////////////////////////


        // {/*Second Testimonial*/}
        // <div>
        //   <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        //     <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
        //     <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
        //       <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="User 2" />
        //     </div>
        //     <div className="p-6">
        //       <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
        //       <hr />
        //       <p className="mt-4">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="currentColor"
        //           className="inline-block h-7 w-7 pr-2"
        //           viewBox="0 0 24 24"
        //         >
        //           <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        //         </svg>
        //         Neque cupiditate assumenda in maiores repudi mollitia architecto.
        //       </p>
        //     </div>
        //   </div>
        // </div>

