// import LoadingCard from "components/loaders/LoadingCard";
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { get_business_act_list } from "redux/actions/businesses";

// function ExploreList({
//     businesses, // Asegúrate de que la propiedad coincida con el nombre en mapStateToProps
//     count
// }) {
//     useEffect(() => {
//         get_business_act_list();
//     }, []);

//     if (!businesses) {
//         return <LoadingCard />;
//     }

//     return (
//         <div>
//             <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
//                 <div className="absolute inset-0">
//                     <div className="bg-white h-1/3 sm:h-2/3" />
//                 </div>
//                 <div className="relative max-w-7xl mx-auto">
//                     <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
//                         {businesses.map(business => (
//                             <div key={business.name}>
//                                 <h2>{business.name}</h2>
//                                 <p>{business.location}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = state => ({
//     count: state.businesses.count,
//     businesses: state.businesses.businesses, // Asegúrate de que la propiedad coincida con el nombre en el estado
// });

// export default connect(mapStateToProps, {
//     get_business_act_list
// })(ExploreList);
