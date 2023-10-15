import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "redux/actions/auth";
import { Oval } from "react-loader-spinner";
import { Navigate } from "react-router";

import Alert from "components/alert"; 
import { LOGIN_SUCCESS } from "redux/actions/types";

const Login = ({ login, loading, isAuthenticated  }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [redirect, setRedirect] = useState(false);

  const [activated, setActivated] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrors('Por favor, complete todos los campos.');
    } else {
      login(email, password);
    }
  };

  // Comprueba si el usuario está autenticado y si se debe redirigir
  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  if (redirect) {
    return <Navigate to="/" />;
  }


  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     setErrors('Por favor, complete todos los campos.');
  //   } else {
  //     // Realiza la acción de inicio de sesión aquí y espera su resultado
  //     const loginSuccess = await login(email, password);
  //     if (loginSuccess) {
  //       setActivated(true);
  //       // Solo redirige si el inicio de sesión fue exitoso
  //     }
  //   }
  // };
    

 
  return (
    <FullWidthLayout>
      {/* Resto */}
      <div
        className="relative flex flex-col justify-center min-h-screen overflow-hidden -mt-28"
        style={{
          backgroundImage:
            'url("https://bafybeihtdltob3hjdup7ze4vqesqe2jhpyqd7xrc2uunveltljg4dh563q.ipfs.w3s.link/patron.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-20"
        >
          <path
            fill="#ffd700"
            fill-opacity="1"
            d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,96C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="w-full p-7 m-auto bg-[#f8f8ff] rounded-md ring-2 ring-gray-300 lg:max-w-xl">
          <img
            className="mx-auto h-20 w-auto"
            src="https://emuel-vassallo.github.io/restaurant-page/components/images/logo-dark-mode.png"
            alt="Your Company"
          />
          <h1 className="p-5 -mt-7 text-3xl font-semibold text-center text-black uppercase">
            ¡Inicia sesión!
          </h1>

          <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                  name="envelope"
                  className="h-5 w-5 text-gray-400"
                ></box-icon>
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="email@example.com"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                  name="key"
                  className="h-5 w-5 mr-2"
                  type="solid"
                ></box-icon>
              </div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="Password"
              />
            </div>

            <div>
              {loading ? (
                <button className="focus:ring-none inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full">
                  <Oval
                    height={20}
                    width={20}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  className="focus:ring-none inline-flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>

            {/* Alert */}
            <div className="block fixed bottom-0 right-0 mb-4 mr-4 lg:w-1/4 md:w-1/2 sm:w-3/4">
              <Alert />
            </div>

            {errors.emptyFields && (
              <p className="flex items-center justify-center text-sm text-red-600">
                {errors.emptyFields}
              </p>
            )}

            <div className="flex items-center justify-center text-sm">
              <Link
                to="/reset_password"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                ¿Olvidó su contraseña?
              </Link>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                to="/signup"
                className="font-medium underline text-indigo-600 hover:text-indigo-500"
              >
                Crear una cuenta
              </Link>
            </p>
          </form>
        </div>
      </div>
    </FullWidthLayout>
  );
};
const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
})(Login);
