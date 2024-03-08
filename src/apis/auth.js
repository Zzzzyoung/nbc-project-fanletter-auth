import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_SERVER_URL,
  headers: { "Content-Type": "application/json" },
});

// 요청을 보내기 전 수행되는 함수
authApi.interceptors.request.use(
  function (config) {
    if (config.url.includes("user")) {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      } else {
        alert("인증이 필요합니다.");
        return Promise.reject("인증이 필요합니다.");
      }
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// 응답을 내보내기 전 수행되는 함수
authApi.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default authApi;
