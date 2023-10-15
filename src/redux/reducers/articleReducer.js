import {
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILURE,
  } from '../actions/articleActions';
  
  // Estado inicial
  const initialState = {
    creatingArticle: false,
    createArticleError: null,
  };
  
  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ARTICLE_SUCCESS:
        return {
          ...state,
          creatingArticle: false,
          createArticleError: null,
        };
      case CREATE_ARTICLE_FAILURE:
        return {
          ...state,
          creatingArticle: false,
          createArticleError: action.error,
        };
      default:
        return state;
    }
  };
  
  export default articleReducer;
  