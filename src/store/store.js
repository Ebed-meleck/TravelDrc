import { createStore } from "redux";
import toggleFavorite from "./reducer/favoriteReducer";

const store = createStore(toggleFavorite);
export default   store ;