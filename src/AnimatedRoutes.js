

//Manejo de rutas navegacion
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

//rutas
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
// import Articles from 'containers/pages/explore/Explore';
import Publish_Articles from 'containers/pages/explore/Create_Articles';
//auth
import Signup from 'containers/auth/Signup';
import Login from 'containers/auth/Login';
import Activate from 'containers/auth/Activate';
import ResetPassword from 'containers/auth/ResetPassword';
import ResetPasswordConfirm from 'containers/auth/ResetPasswordConfirm';



import { AnimatePresence } from 'framer-motion'
import About from 'containers/pages/about/About';
import Contact from 'containers/pages/contact/Contact';
import Privacy from 'components/privacy/Privacy';
import Terms from 'components/terms/Terms';
import Explore from 'containers/pages/explore/Explore';

import RegisterBusiness from 'containers/pages/registerBusiness/RegisterBusines';


function AnimatedRoutes(){
  const location = useLocation()

    return( 
        <AnimatePresence>

                <Routes location={location} key={location.pathname}>
                  {/* Error Display */}
                  <Route path="*" element={<Error404/>}/>

                  {/* Home Display */}
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Explorar" element={<Explore/>}/>
                  <Route path="/Nosotros" element={<About/>}/>
                  <Route path="/Contactos" element={<Contact/>}/>
                  {/* <Route path="/Create" component={<Publish_Articles/>} /> */}

                {/* solo usuarios autenticados */}

                
                  <Route path="/Negocio" element={<RegisterBusiness />} />


                  {/* <Route path="/Explorar/publish/:slug" element={<Publish_Articles/>}/> */}

                  {/* privacy / terms */}
                  <Route path="/privacy" element={<Privacy/>}/>
                  <Route path="/terms" element={<Terms/>}/>
                  


                {/* Authentication */}
                <Route exact path='/signup' element={<Signup/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
                <Route exact path='/reset_password' element={<ResetPassword/>} />
                <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />

                </Routes>
        </AnimatePresence>
                
    )
}
export default AnimatedRoutes
