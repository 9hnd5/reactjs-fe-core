import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.1retail-dev.asia",
  headers: {
    tenantCode: "icc",
    accessToken:
      "DzmI0Jnah/FAVj8T6Kq3M7an8SzW/iSfQXa7cgCBG4KBCQLrG/g094JK1815T/esiB8ZwkKtelgrhVx7KCIYS6csNYeL+L1gG/GBGOIMg6Gh/HzSxQnHDGGJ9Flc2VA/rYZ7E8aj0zvEFfgU9qNn0mCUAqBn7WaajE1Psek8CBk=",
  },
});

axiosInstance.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (err) {
    return Promise.reject(err?.response?.data);
  }
);

export const client = {
  get: <T = any>(url: string, config?: AxiosRequestConfig<any>) => {
    return axiosInstance.get(url, config) as Promise<T>;
  },
};

export default axiosInstance;
