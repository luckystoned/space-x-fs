import axios from "utils/axios";

export const addFavorite = async (flightNumber: number) =>
  axios.post(`/api/launches/${flightNumber}/favorite`);

export const removeFavorite = async (flightNumber: number) =>
  axios.delete(`/api/launches/${flightNumber}/favorite`);
