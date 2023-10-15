import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "redux/actions/auth";
import {Oval} from "react-loader-spinner";
import { Navigate } from "react-router";

const ResetPassword = ({ 
  reset_password,
  loading 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { 
    email, 
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true)
  };
  
  if (requestSent && !loading)
        return <Navigate to='/' />;

  
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
            <div className="w-full p-7 m-auto bg-[#f8f8ff]  rounded-md ring-2 ring-gray-300 lg:max-w-xl">
                <h1 className="p-5 -mt-7 text-3xl font-semibold text-center text-black uppercase ">
                Recuperar cuenta
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
              <div>

                {loading ? 

              <button
                  className="focus:ring-none inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full"
                >
                  <Oval
                    height={20}
                    width={20}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                  />
                </button>:
              <button
              type="submit"
              className="focus:ring-none inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 dark:bg-dark-primary rounded-lg px-8 py-2.5 text-lg font-circular-bold scale-100 hover:scale-105 transition duration-300 ease-in-out w-full"
            >
              Recuperar
            </button>

                }

              </div>

              <div className="flex items-center justify-center text-sm">
              <Link
                  to="/login"
                  className="font-medium underline text-indigo-600 hover:text-indigo-500"
                >
                  ¡Ya tengo una cuenta!
                </Link>
              </div>
            </form>

          </div>
        </div>
    </FullWidthLayout>
  );
  
};
const mapStateToProps = state => ({
  loading: state.Auth.loading
})

export default connect(mapStateToProps, {
  reset_password
}) (ResetPassword)