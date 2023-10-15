import React, { useRef, useEffect, useState } from 'react';
import RegisterModal from './RegisterModal';


const LoginModal = ({ isOpen, setOpenModal }) => {
  const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(isOpen);


  const [modalOpen, setModalOpen] = useState(false); // Modal Register

  // // Modal Register
  // const openLoginModal = () => {
  //   setModalOpen(true);
  // };

  // // Modal Register
  // const closeLoginModal = () => {
  //   setModalOpen(false);
  // };

  // Function to open the modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
    // Agrega un pequeño retardo antes de cerrar el modal para que la transición se complete
    setTimeout(() => {
      setOpenModal(false);
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    }
  }, [isOpen]);

  const modalClasses = `fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${
    isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `modal bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 ${
    isModalVisible ? 'rotate-0' : 'rotate-[2deg]'
  }`;

  return (
    <>
      <div className="fixed inset-0 bg-slate-300-100 backdrop-blur-sm"></div>
      <div className={modalClasses}>
        <div className={modalContentClasses}>
          <div className="absolute top-2 right-2">
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              <box-icon name="x"></box-icon>
            </button>
          </div>
          {/* Resto  del LoginModal */}
          <div className="min-h-full flex flex-col justify-center py-2 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">Ingrese a su cuenta</h2>
            </div>
            
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-5 px-4 sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <box-icon name="envelope" className="h-5 w-5 text-gray-400"></box-icon>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="email@example.com"
                      required
                      style={{ color: '#000' }}
                      className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    />
                  </div>

                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <box-icon name="key" className="h-5 w-5 mr-2" type="solid"></box-icon>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Contraseña"
                      required
                      style={{ color: '#000' }}
                      className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    />
                  </div>

                  <div className="mt-2 flex">
                    <input
                      className="form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out"
                      type="checkbox"
                      id="show-password"
                    />
                    <label
                      className="ml-2 flex text-sm leading-5 text-gray-900"
                      htmlFor="show-password"
                    >
                      <span className="inline-flex text-gray-900 dark:text-dark-txt">
                        Mostrar contraseña
                      </span>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="focus:ring-none inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full"
                    >
                      Iniciar Sesión
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-sm">
                      <button className=" text-gray-900 font-semibold font-dark-accent hover:text-blue-600">
                      ¿Olvidó su contraseña?
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-sm">
                      <span className="text-md  text-gray-900 font-circular-bookdark-txt">
                      ¿No tienes una cuenta?{' '}
                      </span>
                      <button
                        className="text-black underline text-lg font-semibold font-dark-accent hover:text-blue-600"
                        onClick={() => setModalOpen(true)}
                      >
                        Register
                      </button>
                      {modalOpen && (
                      <RegisterModal
                        isOpen={modalOpen}
                        setOpenModal={setModalOpen}
                      />
                    )}


                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
