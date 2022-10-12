// @ts-nocheck
import axios from "utils/axios";

export const addFavorite = async (flightNumber: number, token: string) => {
  const { response } = axios.post(`/api/favorites/${flightNumber}`, { headers: { Authorization: `${token}` } }, { data: { "userId": 10 }})
  return response;
};

export const removeFavorite = async (flightNumber: number, token: string) =>{
  const { data } = axios.delete(`/api/favorites/${flightNumber}`, { headers: { Authorization: `${token}` } }, { data: { "userId": 10 }})
  return data;
};
