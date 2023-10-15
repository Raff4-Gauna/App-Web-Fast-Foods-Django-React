
function HeaderAbout(){
    return(
        <main>
        <div className="bg-teal-50 relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-52 lg:pt-40 lg:pb-40 pt-24 pb-12 ">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-8  sm:text-6xl">
                <span class="bg-yellow-100 text-black px-1 rounded">Sobre nosotros</span>
                </h1>
                <p className="mt-6 text-xl leading-10 text-black max-w-5xl">
                Permíteme compartir contigo cómo surgió la idea detrás de "Sendero del Sabor" y qué me inspiró a emprender este emocionante proyecto.
                Todo comenzó por la comida casera y el deseo de apoyar a los talentosos emprendedores locales en un mundo cada vez más digitalizado.
                Me di cuenta de que había una clara necesidad de conectar a estos apasionados cocineros con personas que valoran la autenticidad de la comida casera. 
                Así nació "Sendero del Sabor", una plataforma diseñada para simplificar y mejorar la experiencia de comprar y vender comida casera de alta calidad.
                Mi objetivo principal es ofrecer a los vendedores una plataforma confiable para mostrar sus delicias culinarias, al mismo tiempo que proporciono a los 
                clientes un lugar conveniente para descubrir y disfrutar de auténticos sabores locales caseros.
                A través de "Sendero del Sabor", aspiramos a hacer que la comida casera sea más accesible, respaldar a los emprendedores locales y crear una comunidad 
                donde todos puedan disfrutar de la verdadera cocina.
                Gracias por unirte a nosotros en este emocionante viaje.
                </p>
                
              </div>
            </div>
              <img
                  src="https://yum.danxschz.com/assets/ramen-fox.2d3199155e71d5906e9c.png"
                  alt="Delicious Food"
                  className="absolute right-0 bottom-0 mr-4 mb-4 sm:mr-6 sm:mb-6  md:mb-8 lg:mr-4 w-1/4 h-auto max-w-full hidden sm:block"
              />
          </div>
        </div>
      </main>
    )
}

export default HeaderAbout