// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createArticle } from 'redux/actions/articleActions'; 

// function CreateArticleForm() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: 0,
//     // Otros campos aquí
//   });

//   const dispatch = useDispatch();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Enviar los datos al backend usando Redux
//     dispatch(createArticle(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         value={formData.title}
//         onChange={handleInputChange}
//         placeholder="Título"
//       />
//       {/* Otros campos de entrada aquí */}
//       <button type="submit">Crear Artículo</button>
//     </form>
//   );
// }

// export default CreateArticleForm;
