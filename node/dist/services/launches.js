"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processLaunches = void 0;
/* eslint-disable camelcase */
const favorites_1 = require("./favorites");
const findRocket_1 = require("../utils/findRocket");
const findFavorite = (favorites, flightNumber) => favorites.find((favorite) => favorite.flight_number === flightNumber);
const processLaunches = (userId, launches, rockets) => __awaiter(void 0, void 0, void 0, function* () {
    // Get user's favorites and merge them to outpoutLaunches
    const userFavorites = yield (0, favorites_1.getUserFavorites)(userId);
    //1) Fetch data from SpaceX / Merge data from launches and rockets and return new output
    const outputLaunches = launches.map((launch) => {
        const { details, flight_number, mission_name, launch_date_unix, links: { mission_patch }, rocket: { rocket_name, rocket_id } } = launch;
        const { cost_per_launch, company, active } = (0, findRocket_1.findRocket)(rockets, rocket_id);
        const userFavorite = findFavorite(userFavorites, flight_number);
        return {
            flight_number,
            mission_name,
            launch_date_unix,
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
        };
    });
    return outputLaunches;
});
exports.processLaunches = processLaunches;
