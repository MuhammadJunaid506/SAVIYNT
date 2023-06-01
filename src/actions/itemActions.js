// Action types
const CREATE_ITEM = 'CREATE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const START_LOADING = 'START_LOADING';
const DATA_RECEIVED = 'DATA_RECEIVED';
const ERROR_OCCURRED = 'ERROR_OCCURRED';

// Action creators
const createItem = (item) => {
  return {
    type: CREATE_ITEM,
    payload: item,
  };
};

const updateItem = (itemId, updatedItem) => {
  return {
    type: UPDATE_ITEM,
    payload: { id: itemId, updatedItem },
  };
};

const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};

const startLoading = () => ({
  type: START_LOADING,
});

const dataReceived = (data) => ({
  type: DATA_RECEIVED,
  payload: data,
});

const errorOccurred = (error) => ({
  type: ERROR_OCCURRED,
  payload: error,
});

const asyncAction = () => {
  return (dispatch) => {
    // Perform asynchronous operations
    // Dispatch plain objects as actions
    dispatch(startLoading());

    // Use Promises or async/await
    someAsyncFunction()
      .then((data) => {
        dispatch(dataReceived(data));
      })
      .catch((error) => {
        dispatch(errorOccurred(error));
      });
  };
};

export {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  createItem,
  updateItem,
  deleteItem,
  START_LOADING,
  DATA_RECEIVED,
  ERROR_OCCURRED,
  asyncAction,
};
