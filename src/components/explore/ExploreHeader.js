import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ExploreHeader() {
  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => (window.location.href = "/search/" + term), 0.2);
    setTerm("");
  };
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl mt-16 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Ingresa a tu negocio  favorito
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explora distintos locales que hacen entregas a domicilio cerca de ti
          </p>
        </div>
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
            <form onSubmit={(e) => onSubmit(e)} className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <button
                  type="submit"
                  className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  <box-icon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    name="search"
                  ></box-icon>
                </button>
                <input
                  id="search"
                  name="search"
                  required
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHeader;
