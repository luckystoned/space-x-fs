"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import attachCurrentUser from '../middlewares/attachCurrentUser'
// import { getLaunches, addLaunchToUserFavorites, removeLaunchFromUserFavorites} from '../../controllers/launches'
const favorites_1 = require("../controllers/favorites");
//2) add routes in order to get favorites, add favorites, and remove favorites
exports.default = (router) => {
    router.get("/favorites", favorites_1.getFavorites);
    router.post("/favorites/:flight_number", favorites_1.addFavorite);
    router.delete("/favorites/:flight_number", favorites_1.removeFavorite);
};
