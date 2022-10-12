const { AppDataSource } = require("../database/app-data-source");
const { Favorites } = require("../entities/favorites");

export const addFavorite = async (req, res) => {
  const user_id = req.currentUserId;
  const flight_number = req.params.flight_number;
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  console.log("addFavorite", user_id, flight_number);
  const currentFav = await favoritesRepo.find({
    where: {
      flight_number,
      user_id
    }
  });

  //Todo: check if flight_number exists in launches table. If not, return 404
  //Todo: check if user exists in users table. If not, return 404
  if (!currentFav.length) {
    await favoritesRepo.insert({
      flight_number,
      user_id
    });
  }
  return res
    .status(201)
    .json(`Favorite for ${req.params.flight_number} has been updated.`);
};

export const removeFavorite = async (req, res) => {
  const user_id = req.currentUserId;
  const flight_number = req.params.flight_number;
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  //Todo: check if flight_number exists in launches table. If not, return 404
  //Todo: check if user exists in users table. If not, return 404
  await favoritesRepo.delete({
    flight_number,
    user_id
  });
  return res
    .status(200)
    .json(`Favorite for ${req.params.flight_number} has been removed.`);
};

export const getFavorites = async (_, res) => {
  const favoritesRepo = AppDataSource.getRepository(Favorites);
  const favs = await favoritesRepo.find();
  return res.status(200).json(favs);
};
