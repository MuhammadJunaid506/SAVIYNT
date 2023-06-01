// reducers/itemReducer.js

// Define the initial state with an empty array for the list of items
const initialState = {
    items: [],
  };
  
  // Implement the reducer function that handles the actions and updates the state accordingly
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      // Action type: CREATE_ITEM
      case 'CREATE_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
        
      // Action type: UPDATE_ITEM
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
  
      // Action type: DELETE_ITEM
      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
  
      // Return the current state if no matching action is found
      default:
        return state;
    }
  };
  
  export default itemReducer;
  