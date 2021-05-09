import { TOGGLE_FAVORITE } from "../action/action";

const initialState = { favoritePlace: [] };

const toggleFavorite = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const favoritePlaceIndex = state.favoritePlace.findIndex(item => item.id === action.value.id);
      if (favoritePlaceIndex !== -1) {
        // suppression
        nextState = {
          ...state,
          favoritePlace: state.favoritePlace.filter((item, index) => {
            index !== favoritePlaceIndex
          }),
        };
      } else {
        nextState = {
          ...state,
          favoritePlace: [...state.favoritePlace, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  };
}

export default toggleFavorite;