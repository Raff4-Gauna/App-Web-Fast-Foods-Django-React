import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from '@headlessui/react'
import { connect } from "react-redux"
import { Helmet } from 'react-helmet-async';
import CircleLoader from "react-spinners/CircleLoader";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"

import { setAlert } from "redux/actions/alert";
import Alert from "components/alert";

import { useNavigate } from 'react-router-dom';


function RegisterBusiness({ setAlert }) {
  const navigate = useNavigate();
    
    const [errors, setErrors] = useState({}); // Declarar el estado de errors
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const [enabled, setEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      location: '',
      phone_number: '',
      email_business: '',
      attention_schedule: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validateForm = () => {
      const newErrors = {}; // Cambiar a newErrors para evitar conflictos de nombres
  
      if (!formData.name.trim()) {
        newErrors.name = 'Se requiere el nombre';
      }
  
      if (!formData.description.trim()) {
        newErrors.description = 'Se requiere descripción';
      }
  
      if (!formData.location.trim()) {
        newErrors.location = 'Se requiere ubicación';
      }
  
      if (!formData.phone_number.trim()) {
        newErrors.phone_number = 'Se requiere número de teléfono';
      }
  
      if (!formData.email_business.trim()) {
        newErrors.email_business = 'correo electronico es requerido';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email_business)) {
        newErrors.email_business = 'correo electronico es requerido';
      }
  
      if (!formData.attention_schedule.trim()) {
        newErrors.attention_schedule = 'Se requiere horario de atención';
      }
  
      if (!enabled) {
        newErrors.terms = 'Debes aceptar los términos de servicio y política de privacidad.';
      }
  
      setErrors(newErrors); // Actualizar el estado de errors
      return newErrors;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = validateForm();
  
      if (Object.keys(newErrors).length > 0) {
        // Mostrar errores en el formulario
        const errorMessages = Object.values(newErrors).join(' ');
        setAlert(errorMessages, 'red');
      } else {
        setLoading(true);
  
        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `JWT ${localStorage.getItem('access')}`,
          },
        };
  
        const body = JSON.stringify(formData);
  
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/Business/create`,
            body,
            config
          );
  
          if (res.status === 201) {
            setAlert('Evaluaremos sus  y solicitud, usted será redirigido al home', 'green');
            // Reinicia el estado de formData para vaciar los campos
            setFormData({
              name: '',
              description: '',
              location: '',
              phone_number: '',
              email_business: '',
              attention_schedule: '',
            });
            setErrors({});
             // Espera 3 segundos antes de redirigir al usuario al inicio (home)
          setTimeout(() => {
            navigate('/'); // Cambia '/home' a la URL de tu página de inicio
          }, 5000);
          }
        } catch (err) {
          setAlert('Error al crear el negocio', 'red');
        } finally {
          // Asegúrate de detener el indicador de carga independientemente de si la solicitud tiene éxito o no.
          setLoading(false);
        }
      }
    };

    return (
        <FullWidthLayout>
            <>
            <div className="pt-28">
                <div className="relative bg-white">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
                    </div>
                    <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                            <div className="mx-auto max-w-lg">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    Create a Business
                                </h2>
                                <p className="mt-3 text-lg leading-6 text-gray-500">
                                    Enter the details to create a business.
                                </p>
                            </div>
                        </div>
                      
                        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                            <div className="mx-auto max-w-lg lg:max-w-none">
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                                    <div>
                                        <label htmlFor="name" className="sr-only">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Business Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="sr-only">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={4}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Business Description"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="sr-only">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            required
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Location"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone_number" className="sr-only">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            required
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Phone Number"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email_business" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email_business"
                                            value={formData.email_business}
                                            required
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="attention_schedule" className="sr-only">
                                            Hora de atencion
                                        </label>
                                        <input
                                            type="text"
                                            name="attention_schedule"
                                            value={formData.attention_schedule}
                                            required
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Hora de atencion"
                                        />
                                    </div>


                                    <div className="px-4 py-5 sm:px-6">
                                        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                            <div className="grid-cols-12 ml-4 mt-2 flex">
                                                <Switch
                                                    checked={enabled}
                                                    onChange={setEnabled}
                                                    className={`${enabled ? 'bg-orange-500' : 'bg-gray-300'}
                                                    col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                >
                                                    <span
                                                    aria-hidden="true"
                                                    className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
                                                        pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                                <p className="col-span-9 ml-4 text-md font-regular leading-6 text-gray-600">
                                                    By selecting this you accept the <span className="text-blue-500"><Link to='/terms'>Terms of service</Link></span> and <span className="text-blue-500"><Link to='/privacy'>Privacy policy</Link></span>.
                                                </p>
                                                      
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-4 py-5 sm:px-6">
                                        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                            <div className="ml-4 mt-2 flex-shrink-0">
                                                {loading ? 
                                                    <div 
                                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                    >
                                                        
                                                        <CircleLoader loading={loading} size={25} color="#ffffff" />
                                                    </div>
                                                    : 
                                                    <button 
                                                        type="submit"
                                                        className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                    >
                                                        Create Business
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>
                    <div className="block fixed bottom-0 right-0 mb-4 mr-4 lg:w-1/4 md:w-1/2 sm:w-3/4">
            <Alert />
          </div>
                </div>
            </div>
            </>
        </FullWidthLayout>
    );
}
const mapStateToProps=state=>({})


export default connect(null, { setAlert })(RegisterBusiness);