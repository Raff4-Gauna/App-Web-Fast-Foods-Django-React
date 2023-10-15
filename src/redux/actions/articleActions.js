import axios from 'axios';

// Definir tipos de acciones
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'CREATE_ARTICLE_FAILURE';

// Acción para crear un artículo
export const createArticle = (articleData) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud POST al backend para crear el artículo
      const response = await axios.post('/api/dish/create', articleData);

      if (response.status === 201) {
        // La creación del artículo fue exitosa
        dispatch({ type: CREATE_ARTICLE_SUCCESS });
      } else {
        // Manejar otros posibles códigos de estado o errores
        dispatch({ type: CREATE_ARTICLE_FAILURE, error: 'Error al crear el artículo' });
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      dispatch({ type: CREATE_ARTICLE_FAILURE, error: 'Error de red' });
    }
  };
};
