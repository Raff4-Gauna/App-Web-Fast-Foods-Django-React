import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { connect } from "react-redux";
// import { signup } from '../../redux/actions/auth'
import { signup } from "redux/actions/auth";

const Signup = ({ signup }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    password: "",
    re_password: "",
  });

  const {
    email,
    first_name,
    last_name,
    phone_number,
    location,
    password,
    re_password,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(
      email,
      first_name,
      last_name,
      phone_number,
      location,
      password,
      re_password
    );
    setAccountCreated(true);
    window.scrollTo(0, 0);
  };

  return (
    <FullWidthLayout>
      {/* Resto */}
      <div
        className="relative flex flex-col justify-center min-h-screen overflow-hidden -mt-7"
        style={{
          backgroundImage:
            'url("https://bafybeihtdltob3hjdup7ze4vqesqe2jhpyqd7xrc2uunveltljg4dh563q.ipfs.w3s.link/patron.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0">
      <path fill="#ffd700" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,96C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
            <div className="w-full p-7 m-auto bg-[#f8f8ff]  rounded-md  ring-2 ring-gray-300 lg:max-w-xl mt-40">
                <h1 className="p-10 -mt-11 text-3xl font-semibold text-center text-black underline uppercase">
                Crear una nueva cuenta
                </h1>

          <form onSubmit={(e) => onSubmit(e)} className="space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                  className="h-5 w-5 text-gray-400"
                  name="user-circle"
                  type="solid"
                ></box-icon>
              </div>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="Nombre"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                  className="h-5 w-5 text-gray-400"
                  name="user"
                  type="solid"
                ></box-icon>
              </div>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="Apellido"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon name="envelope" type="solid"></box-icon>
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
                  className="h-5 w-5 text-gray-400"
                  name="phone"
                  type="solid"
                ></box-icon>
              </div>
              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="phone_number"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                  className="h-5 w-5 text-gray-400"
                  name="map"
                  type="solid"
                ></box-icon>
              </div>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="Argentina, Buenos Aires, CABA, Avellaneda"
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
                placeholder="Contraseña"
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
                name="re_password"
                value={re_password}
                onChange={(e) => onChange(e)}
                required=""
                className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                placeholder="Repetir Contraseña"
              />
            </div>

            <div>
              <button
                type="submit"
                className="focus:ring-none inline-flex items-center justify-center text-white  bg-indigo-600 hover:bg-indigo-700 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full"
              >
                Registro
              </button>
            </div>
          </form>
          
          <div className="text-sm text-gray-500 mt-4">
            Al registrarte, aceptas la{" "}
            <a
              className="font-base underline text-blue-500 hover:text-blue-600"
              href="/privacy"
            >
              Política de Privacidad
            </a>{" "}
            y{" "}
            <a
              className="font-base underline text-blue-500 hover:text-blue-600"
              href="/terms"
            >
              Términos de Servicio
            </a>
            .
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="/login"
                  className="font-medium underline text-indigo-600 hover:text-indigo-500"
                >
                  ¡Ya tengo una cuenta!
                </Link>
              </p>
        </div>
        </div>
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  signup,
})(Signup);

//1:33:08
