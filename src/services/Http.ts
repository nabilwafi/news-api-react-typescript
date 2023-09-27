import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { REACT_APP_NEWS_API_KEY } from "../helpers/constant";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2"
});

instance.defaults.headers.common["Authorization"] = REACT_APP_NEWS_API_KEY;

export type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<T>(url, config);
    }
  };
};

export const Http = api(instance);
