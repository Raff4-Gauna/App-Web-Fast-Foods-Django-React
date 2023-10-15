import {connect} from 'react-redux'
import { Popover, Transition, Menu } from '@headlessui/react'
import {useState, Fragment, useEffect } from 'react'
import {NavLink, Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import { Icon } from 'boxicons';
// import DotLoader from 'react-spinners/DotLoader'
import Alert from 'components/alert';
import { logout } from 'redux/actions/auth';


import DotLoader from 'react-spinners/DotLoader';



const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Mis datos', href: '#' },
  { name: 'Crear Categorias', href: '#' },
  { name: 'Publicar articulos', href: '#' },
  { name: 'cerrar sesion', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



//
const solutions = [
    {
      name: 'Explorar',
      description: 'Measure actions your users take',
      href: '/Explorar',
      icon: IconOne,
    },
    {
      name: 'Nosotros',
      description: 'Keep track of your growth',
      href: '/Nosotros',
      icon: IconThree,
    },
    {
      name: 'Contacto',
      description: 'Keep track of your growth',
      href: '/Contactos',
      icon: IconThree,
    },
    {
      name: 'Iniciar sesión',
      description: 'Keep track of your growth',
      href: '/login',
      icon: IconThree,
    },
    {
      name: 'Empezar',
      description: 'Keep track of your growth',
      href: '/signup',
      icon: IconThree,
    },
    
  ]

function Navbar({
  isAuthenticated,
  user,
  logout
}) {

  //
  const [redirect, setRedirect] = useState(false);
  const [loading,setLoading]=useState(true)
  const [open, setOpen] = useState(false)

  const logoutHandler = () => {
    logout()
    setRedirect(true);
  }

  if (redirect){
    window.location.reload(false)
    return <Navigate to='/' />;
  }

  const authLinks = ( 
    <Menu as="div" className="relative inline-block text-left ml-4">
      <div>
      <Menu.Button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-600">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <svg className="h-full w-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Ajustes
                </a>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <NavLink
                to='/Negocio'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Registrá tu negocio
                </NavLink>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Soporte
                </a>
              )}
            </Menu.Item>
            
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Cerrar sesión
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )

  const guestLinks = (
<Fragment>
  <NavLink to='/login' className="text-lg font-medium text-black bg-transparent hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 py-2 px-4 ml-3 border border-yellow-600 rounded-md transition duration-300 ease-in-out">Iniciar sesión</NavLink>
  <NavLink to='/signup' className="text-lg font-medium text-black bg-orange-button hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-amber-600 py-2 px-4 ml-6 border border-transparent rounded-md relative transition duration-300 ease-in-out">Empezar<span className="mx-3"></span>
    {loading && (
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <DotLoader loading={loading} size={20} color="#f2f2f2" />
      </span>
    )}
  </NavLink>
</Fragment>

  )

    

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    

    return(
      <>
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-2 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2 ">
                    <img 
                    src="https://emuel-vassallo.github.io/restaurant-page/components/images/logo-dark-mode.png"
                    width={70}
                    height={70} 
                    className=""/>
                    </Link>

                    <div className="ml-4 mt-2 relative flex justify-center items-center">
                    <NavLink to='/Explorar' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 transition duration-300 ease-in-out mx-4">Explorar</NavLink>
                    <NavLink to='/Nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                    <NavLink to='/Contactos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-yellow-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
                    
                    {
                      isAuthenticated ? authLinks:guestLinks
                    }
                    
                    </div>
                    

                </div>
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img
                        src={'https://emuel-vassallo.github.io/restaurant-page/components/images/logo-dark-mode.png'}
                        width={70}
                        height={70}
                        className=""
                    />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">

                    
                    <Popover className="relative">
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className={`
                                ${open ? '' : 'text-opacity-90'}
                                focus:ring-none focus:outline-none`}
                            >
                            {
                                open ?
                                <box-icon name='x' ></box-icon>
                                :
                                <box-icon name='menu'></box-icon>
                            }
                            </Popover.Button>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                        <item.icon aria-hidden="true" />
                                        </div>
                                        <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                        </div>
                                    </Link>
                                    ))}
                                </div>
                                <div className="bg-gray-50 p-4">
                                    <a
                                    href="##"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                    <span className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900">
                                        Documentation
                                        </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Start integrating products and tools
                                    </span>
                                    </a>
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                    </div>
                </div>
            </div>
            {/* Alert */}
            <div className="block fixed bottom-0 right-0 mb-4 mr-4 lg:w-1/4 md:w-1/2 sm:w-3/4">
            <Alert />
          </div>

        </nav>
        





        </>
    )
  }

const mapStateToProps=state=>({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user
})

export default connect(mapStateToProps, {
  logout
}) (Navbar)

function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    )
  }