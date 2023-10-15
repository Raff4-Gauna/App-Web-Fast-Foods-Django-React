import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "redux/actions/auth";
import {Oval} from "react-loader-spinner";
import { Navigate, useParams } from "react-router";

const ResetPasswordConfirm = ({ 
  reset_password_confirm,
  loading 
}) => {

  const params = useParams()
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { 
    new_password,
    re_new_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    const uid = params.uid
    const token = params.token

    reset_password_confirm(uid, token, new_password, re_new_password)
    if (new_password === re_new_password)
      setRequestSent(true);
  }

  if (requestSent && !loading)
        return <Navigate to='/' />;

  
  return (
    <FullWidthLayout>
      {/* Resto */}
      <div className="min-h-full flex flex-col justify-center py-16 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
            Confirmar nueva contraseña
          </h2>
          
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-5 px-4 sm:px-10">
            <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <box-icon
                    name="key"
                    className="h-5 w-5 mr-2"
                    type="solid"
                  ></box-icon>
                </div>
                <input
                  type="password"
                  name="new_password"
                  value={new_password}
                  onChange={(e) => onChange(e)}
                  required=""
                  className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="Password"
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
                  name="re_new_password"
                  value={re_new_password}
                  onChange={(e) => onChange(e)}
                  required=""
                  className="text-md duration block w-full border rounded focus:ring-none focus:outline-none border-gray-300 py-3 pl-10 font-circular-light transition ease-in-out dark:bg-dark-second dark:text-dark-txt"
                  placeholder="repeat password"
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
              nueva contraseña
            </button>

                }

              </div>

              <div className="flex items-center justify-center text-sm">
                <Link to="/reset_password" className="text-blue-500 hover:text-blue-600 font-semibold">
                  ¿Olvidó su contraseña?
                </Link>
              </div>

              <div className="flex items-center justify-center text-sm">
                <span className="text-md text-gray-900 font-circular-bookdark-txt">
                  ¿No tienes una cuenta?{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FullWidthLayout>
  );
  
};
const mapStateToProps = state => ({
  loading: state.Auth.loading
})

export default connect(mapStateToProps, {
  reset_password_confirm
}) (ResetPasswordConfirm)