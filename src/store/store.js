import { createStore } from "redux";
import toggleFavorite from "./reducer/favoriteReducer";

export default createStore(toggleFavorite);
