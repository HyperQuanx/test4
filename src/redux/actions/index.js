export const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const registerSuccess = (data) => ({
  type: "REGISTER_SUCCESS",
  payload: data,
});

export const registerFailure = () => ({
  type: "REGISTER_FAILURE",
});
