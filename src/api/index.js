import axios from "axios";

// fake api base url
const BASE_URL = 'https://fakestoreapi.com';

// initialize http client instance
const http = axios.create({
  baseURL: BASE_URL,
});

// export http client modules
export const api = {
  product: {
    browse: () => http.get("/products"),
  },
  categories: {
    browse: () => http.get("/categories"),
  },
}
