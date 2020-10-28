import axios from "axios";
import {API_ENDPOINT, HttpResponseCode, REQUEST_TIMEOUT} from "../const";

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: API_ENDPOINT,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpResponseCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
