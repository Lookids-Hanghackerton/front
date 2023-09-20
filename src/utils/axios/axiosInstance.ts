import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
};

export const axiosInstance = axios.create(config);