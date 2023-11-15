// src/apis/newAccount.js

import axios from "axios";
import { registerSuccess, registerFailure } from "../redux/actions/index";
import { checkAuthAPI } from "./auth"; // checkAuthAPI import

export const registerAPI = (userData) => {
  return function (dispatch, getState) {
    return axios({
      method: "post",
      url: "http://3.38.191.164/register",
      data: userData,
    })
      .then((res) => {
        dispatch(registerSuccess(res.data));
        return res.data;
      })
      .then((data) => {
        // 회원가입 성공 후 사용자 인증을 확인합니다.
        return dispatch(checkAuthAPI());
      })
      .catch((error) => {
        console.log(error);
        dispatch(registerFailure());
        throw error;
      });
  };
};
