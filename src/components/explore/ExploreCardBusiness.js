// import { useEffect } from "react"
// import { connect } from "react-redux"
// import { useParams } from "react-router-dom"
// import { get_explore } from "redux/actions/exploreBusiness"
// import { useSelector, useDispatch } from 'react-redux';

// function ExploreCardBusiness({ get_explore }) {
//     const dispatch = useDispatch();
//     const exploreData = useSelector((state) => state.explore);
  
//     useEffect(() => {
//       // Cuando el componente se monta, llamamos a la acción para obtener la lista de negocios.
//       dispatch(get_explore());
//     }, [dispatch, get_explore]);
  
//     return (
//       <div>
//         <h1>Lista de Negocios</h1>
//         {exploreData && exploreData.results ? (
//           <ul>
//             {exploreData.results.map((business) => (
//               <li key={business.id}>
//                 <p>Nombre del negocio: {business.business_name}</p>
//                 <p>Ubicación: {business.location}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No se encontraron negocios.</p>
//         )}
//       </div>
//     );
//   }
  
//   export default connect(null, { get_explore })(ExploreCardBusiness);


import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { get_explore } from "redux/actions/exploreBusiness";
import ExploreCard from "./ExploreCard";
import LoadingCard from "components/loaders/LoadingCard";

function ExploreCardBusiness() {
  const dispatch = useDispatch();
  const exploreData = useSelector((state) => state.explore);

  useEffect(() => {
    // Cuando el componente se monta, llamamos a la acción para obtener la lista de negocios.
    dispatch(get_explore());
  }, [dispatch]);

  return (
    <div>
      {exploreData && exploreData.results ? (
        <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {exploreData.results.map((business) => (
                <ExploreCard key={business.id} data={business} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}

export default ExploreCardBusiness;
