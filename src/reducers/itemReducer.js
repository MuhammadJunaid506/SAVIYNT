// reducers/itemReducer.js


const initialState = {
    items: [],
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
        
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
  

      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default itemReducer;
  