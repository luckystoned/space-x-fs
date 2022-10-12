"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middlewares/auth");
const favorites_1 = require("../controllers/favorites");
//2) add routes in order to get favorites, add favorites, and remove favorites.
//3) add auth middleware to routes
exports.default = (router) => {
    router.get("/favorites", auth_1.auth, favorites_1.getFavorites);
    router.post("/favorites/:flight_number", auth_1.auth, favorites_1.addFavorite);
    router.delete("/favorites/:flight_number", auth_1.auth, favorites_1.removeFavorite);
};
