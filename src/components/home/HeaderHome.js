import { Typewriter } from "react-simple-typewriter";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import LoginModal from "components/navigation/auth/LoginModal";

 

function HeaderHome() {
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false); // State to control the modal

  // Function to open the modal
  const openLoginModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeLoginModal = () => {
    setModalOpen(false);
  };  

  return (
    <main className="relative overflow-hidden py-24 sm:py-32 bg-yellow-300">
      <div className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-64 xl:pb-64 lg:pt-40 lg:pb-48 text-center pt-24 pb-12">
          <div className="text-inherit text-black">
            <h1 className="text-4xl font-bold  tracking-tight sm:text-5xl lg:text-6xl">
            Disfruta de los Mejores Platos <br />
              {' '}
              <span className="text-yellow-300 font-semibold">
                <Typewriter
                  words={['Explora', 'Ordena', 'Disfruta!']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            {/* <p className="mt-6 text-lg leading-8">
              Los sabores más auténticos te esperan. Regístrate y descubre nuevas delicias.
            </p> */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-full w-full object-cover object-right md:object-center bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0">
        <path fill="#ffd700" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,96C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <img
            src="https://foodie01.netlify.app/assets/home-ac4b6d64.png"
            alt="Delicious Food"
            className="absolute right-0 bottom-0 mr-4 mb-4 sm:mr-6 sm:mb-6 md:mr-8 md:mb-8 lg:mr-4 w-1/4 h-auto max-w-full hidden sm:block"
          />

          <img
            src="https://bafybeicygm4yxunjodmroufajyi3ii5ao72hsqycvkjm3ts32xsf5b2x6u.ipfs.w3s.link/food-fast.png"
            alt="Delicious Food"
            className="absolute left-0 bottom-0 ml-4 mb-4 sm:ml-6 sm:mb-6 md:ml-8 md:mb-8 lg:ml-4 w-1/4 h-auto max-w-full hidden sm:block"
          />
      </div>
    </main>


  );
}

export default HeaderHome;


// <main>
//   <div className="relative flex overflow-hidden py-24 sm:py-32">
//   <div className="w-1/2">
//       <video
//         className="w-70 h-70 object-cover"
//         autoPlay={true}
//         loop={true}
//         muted={true}
//         playsInline={true}
//         onLoadedData={() => setLoading(false)}
//         src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
//         alt=""
//       />
//     </div>

//     <div className="relative z-10 w-1/2 px-6 lg:px-8">
//       <div className="mx-auto max-w-full xl:mx-12 xl:pt-64 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
//         <div className="text-center text-black">
//           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//             Sabores Locales a tu Puerta{" "}
//             <span className="text-yellow-300 font-semibold">
//               <Typewriter
//                 words={["Explora", "Ordena", "Disfruta!"]}
//                 loop={0}
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={120}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </span>
//           </h1>
//           <p className="mt-6 text-lg leading-8">
//             Los sabores más auténticos te esperan. Regístrate y descubre nuevas delicias.
//           </p>

//           <button
//             className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//             style={{ minHeight: '50px', minWidth: '150px' }}
//             onClick={(e) => {
//               e.preventDefault();
//               openLoginModal(); 
//             }}
//           >
//             Empezar
//             <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
//           </button>
//           {modalOpen && (
//             <LoginModal
//               isOpen={modalOpen}
//               setOpenModal={closeLoginModal}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// </main>

 {/* <button
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                style={{ minHeight: '50px', minWidth: '150px' }}
                onClick={(e) => {
                  e.preventDefault();
                  openLoginModal(); 
                }}
              >
                Empezar
                <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
              </button>
                  {modalOpen && (
                    <LoginModal
                      isOpen={modalOpen}
                      setOpenModal={closeLoginModal}
                    />
                  )} */}