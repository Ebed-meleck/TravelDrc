import { TOGGLE_FAVORITE } from "../types/types";

const initialState = { favoritePlace: [] };

const toggleFavorite = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const favoritePlaceIndex = state.favoritePlace.findIndex(item => item.id === action.payload.id);
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
          favoritePlace: [...state.favoritePlace, action.payload],
        };
      }
      return nextState || state;
    default:
      return state;
  };
}

export default toggleFavorite;