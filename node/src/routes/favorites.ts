// import attachCurrentUser from '../middlewares/attachCurrentUser'
// import { getLaunches, addLaunchToUserFavorites, removeLaunchFromUserFavorites} from '../../controllers/launches'
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favorites";

//2) add routes in order to get favorites, add favorites, and remove favorites
export default (router) => {
  router.get("/favorites", getFavorites);
  router.post("/favorites/:flight_number", addFavorite);
  router.delete("/favorites/:flight_number", removeFavorite);
};
