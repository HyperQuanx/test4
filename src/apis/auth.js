// src/apis/auth.js

import axios from "axios";

export const checkAuthAPI = () => {
  return axios({
    method: "get",
    url: "http://3.38.191.164/user",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`, // 토큰이 localStorage에 저장되어 있다고 가정합니다.
    },
  })
    .then((res) => {
      console.log("인증 성공:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("인증 오류:", error);
      throw error;
    });
};
