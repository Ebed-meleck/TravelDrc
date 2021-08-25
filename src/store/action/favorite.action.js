import { TOGGLE_FAVORITE } from "../types/types";

export const _actionFavorite = (data) => {
  return (dispatch)=>{
    dispatch({ 
      type:TOGGLE_FAVORITE,
      payload:data
      });
  }
}