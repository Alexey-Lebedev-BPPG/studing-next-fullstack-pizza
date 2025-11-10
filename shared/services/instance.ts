import axios from 'axios';

// инстанс аксиоса
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
