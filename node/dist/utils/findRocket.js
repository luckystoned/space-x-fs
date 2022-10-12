"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRocket = void 0;
//Find rocket by id, rockets is an array of rockets from /rockets endpoint and rocketId is the id of the rocket from /launches endpoint
const findRocket = (rockets, rocketId) => rockets.find((rocket) => rocket.rocket_id === rocketId);
exports.findRocket = findRocket;
