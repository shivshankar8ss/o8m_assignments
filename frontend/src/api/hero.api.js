import api from "./axios";

export const fetchHeroes = async () => {
  const response = await api.get("/hero");
  return response.data;
};
