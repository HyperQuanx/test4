// src/apis/login.js

import axios from "axios";
import { loginSuccess, loginFailure } from "../redux/actions/index";
import { checkAuthAPI } from "./auth"; // checkAuthAPI import

export const loginAPI = (userData) => {
  return function (dispatch, getState) {
    return axios({
      method: "post",
      url: "http://3.38.191.164/login",
      data: userData,
    })
      .then((res) => {
        dispatch(loginSuccess(res.data));
        return res.data;
      })
      .then((data) => {
        // 로그인 성공 후 사용자 인증을 확인합니다.
        return dispatch(checkAuthAPI());
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure());
        throw error;
      });
  };
};
