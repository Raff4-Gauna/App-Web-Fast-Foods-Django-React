export default function CTAHome() {
  return (
    <div  className="relative bg-indigo-400">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://us.supersmart.com/data/images/blog/alimentation-holistique-partage-salade.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Los sabores más auténticos te esperan</h1>
        <p  className="mt-6 max-w-3xl text-xl text-indigo-100">
        Nuestra aplicación te trae deliciosas comidas preparadas 
        por talentosos vendedores locales. Descubre una variedad de sabores.
        </p>
      </div>
      
    </div>
  )
}