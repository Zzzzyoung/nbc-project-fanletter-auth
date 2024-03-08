import axios from "axios";

const fanLetterApi = axios.create({
  baseURL: process.env.REACT_APP_FANLETTER_SERVER_URL,
});

// 요청을 보내기 전 수행되는 함수
fanLetterApi.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// 응답을 내보내기 전 수행되는 함수
fanLetterApi.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default fanLetterApi;
