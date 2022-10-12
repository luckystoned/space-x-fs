import { auth } from "../middlewares/auth";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favorites";

//2) add routes in order to get favorites, add favorites, and remove favorites.
//3) add auth middleware to routes
export default (router) => {
  router.get("/favorites", auth, getFavorites);
  router.post("/favorites/:flight_number", auth, addFavorite);
  router.delete("/favorites/:flight_number", auth, removeFavorite);
};
