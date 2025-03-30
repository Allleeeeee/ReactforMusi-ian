
const initialState = {
    imageUrl: './img/photo_1.jpg',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_IMAGE':
        return {
          ...state,
          imageUrl: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  