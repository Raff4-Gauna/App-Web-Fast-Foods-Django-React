import React, { useRef, useEffect, useState } from "react";

const RegisterModal = ({ isOpen, setOpenModal }) => {
  const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(isOpen);

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

  const modallClasses = `fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${
    isModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`;

  const modallContentClasses = `modal bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 ${
    isModalVisible ? "rotate-0" : "rotate-[2deg]"
  }`;

  return (
    <>
      <div className={modallClasses}>
        <div className={modallContentClasses}>

        <div className="absolute top-2 right-2">
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              <box-icon name="x"></box-icon>
            </button>
          </div>
          
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="py-15 px-4 sm:px-10">
              <form className="space-y-3">
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <box-icon className="h-5 w-5 text-gray-400" name='user-circle' type='solid' ></box-icon>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    required=""
                    className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    placeholder="Nombre"
                    value=""
                  />
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <box-icon className="h-5 w-5 text-gray-400" name='user' type='solid' ></box-icon>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    required=""
                    className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    placeholder="Apellido"
                    value=""
                  />
                </div>
                
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <box-icon name='envelope' type='solid' ></box-icon>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required=""
                    className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    placeholder="email@example.com"
                    value=""
                  />
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <box-icon name="key" className="h-5 w-5 mr-2" type="solid"></box-icon>
                  </div>
                  <input
                    type="password"
                    name="password"
                    required=""
                    className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-dark py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                    placeholder="Password"
                    value=""
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className=" focus:ring-none inline-flex items-center justify-center  text-white bg-blue-500  hover:bg-blue-600 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg 
                                font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full">
                    Registro
                  </button>
                </div>
              </form>
            
              
              <div className="text-sm text-gray-500">
                By registering you agree to the{" "}
                <a className="font-base  underline" href="/privacy">
                  <span className="text-gray-500">Privacy Policy</span>
                </a>{" "}
                and{" "}
                <a className="font-base  underline" href="/terms">
                  <span className="text-gray-500">Terms of Service</span>
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
