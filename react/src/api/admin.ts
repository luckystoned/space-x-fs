import axios from "utils/axios";

export const login = async () => {
  const { data } = await axios.post("/api/admin/token", {userId: 10});
  return data.token;
};
