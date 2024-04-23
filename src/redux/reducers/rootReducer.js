
const initialState = {
  products: [], 
  productDetails: {
    loading: false, 
    error: null, 
    product: null 
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'FETCH_PRODUCT_DETAILS_REQUEST':
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          loading: true,
          error: null
        }
      };
    
    default:
      return state;
  }
};

export default rootReducer;

