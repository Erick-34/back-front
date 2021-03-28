import api from "../utils/api";

export const getProduct = async () => {
  const response = await api
    .get()
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};

export const createProduct = async (name, description) => {
  const response = api
    .post("/create", { name, description })
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};
