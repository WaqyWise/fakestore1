import axios from "axios";
import qs from "qs";
import passTokenInterceptor from "./passTokenInterceptor";

// fake api base url
const BASE_URL = 'https://fakestoreapi.com';

// initialize http client instance
const http = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: (params) => qs.stringify(params, {
    arrayFormat: 'indices',
    encode: false,
    skipNulls: true,
  }),
  headers: {'Content-Type': 'application/json'},
  responseType: 'json',
});

// Add a request interceptor
http.interceptors.request.use(passTokenInterceptor, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // store.dispatch('error/clear'); // TODO uncomment if necessary!
  // if (error.response) {
  //   // The request was made and the server responded with a status code that falls out of the range of 2xx
  //   if (error.response.status === 401) {
  //     return Promise.reject(error);
  //   } else {
  //     if (error.response.status >= 400) {
  //       store.dispatch('error/push', error); // TODO: handle error
  //     }
  //   }
  // } else if (error.request) {
  //   // The request was made but no response was received
  //   // `error.request` is an instance of XMLHttpRequest in the browser
  //   store.dispatch('error/push',  [{error: 'The request was made but no response was received'}]);
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   store.dispatch('error/push', [{error: 'The server is temporarily unavailable or something happened in setting up the request. '}]);
  // }
  return Promise.reject(error);
});



// export http client modules
export const api = {
  product: {
    browse: () => http.get("/products"),
  },
  categories: {
    browse: () => http.get("/products/categories"),
  },
}