import { Launch } from "types";
import axios from "utils/axios";

export const getLaunches = async (token: string): Promise<Launch[]> => {
  const { data } = await axios.get("/api/launches", { headers: { Authorization: `${token}` } });
  return data;
};
