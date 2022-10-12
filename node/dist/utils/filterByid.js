"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByid = void 0;
//Find rocket by id, rockets is an array of rockets from /rockets endpoint and rocketId is the id of the rocket from /launches endpoint
const filterByid = (items, itemId) => items.find((rocket) => rocket.rocket_id === itemId);
exports.filterByid = filterByid;
