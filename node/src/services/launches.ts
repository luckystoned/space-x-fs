/* eslint-disable camelcase */
import { getUserFavorites } from "./favorites";
import { findRocket } from "../utils/findRocket";

const findFavorite = (favorites, flightNumber) =>
  favorites.find((favorite) => favorite.flight_number === flightNumber);


export const processLaunches = async (userId, launches, rockets) => {
  // Get user's favorites and merge them to outpoutLaunches
  const userFavorites = await getUserFavorites(userId);

  //1) Fetch data from SpaceX / Merge data from launches and rockets and return new output
  const outputLaunches = launches.map((launch) => {
    const {
      details,
      flight_number,
      mission_name,
      links: { mission_patch },
      rocket: { rocket_name, rocket_id }
    } = launch;
    const { cost_per_launch, company, active } = findRocket(rockets, rocket_id);
    const userFavorite = findFavorite(userFavorites, flight_number);

    return {
      flight_number,
      mission_name,
      mission_patch,
      details,
      rocket: {
        rocket_id,
        rocket_name,
        active,
        cost_per_launch,
        company
      },
      favorite: !!userFavorite
    }
  });

  return outputLaunches
};