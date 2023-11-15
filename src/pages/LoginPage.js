import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  BoxStyle,
  IdPwBox,
  InputStyle,
  ClickBox,
  ClickBoxStyle,
} from "../components/Common";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { loginAPI } from "../apis/login";
import { checkAuthAPI } from "../apis/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const [pw, setPw] = useState("");
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const login = () => {
    if (id === "" || pw === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }
    dispatch(loginAPI(id, pw)).then(() => {
      // 로그인 성공 후 유저 인증 확인
      dispatch(checkAuthAPI());
    });
  };

  return (
    <Container>
      <BoxStyle>
        <div>
          <h1>Login</h1>
          <IdPwBox>
            <p>Username</p>
            <InputStyle
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
            />
            <p>Password</p>
            <InputStyle
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={onChangePw}
            />
          </IdPwBox>
          <ClickBox>
            <div>
              <ClickBoxStyle onClick={login}>Login</ClickBoxStyle>
              <Pstyle>회원이 아니신가요?</Pstyle>
              <CustomLink to="/register">회원가입</CustomLink>
            </div>
          </ClickBox>
        </div>
      </BoxStyle>
    </Container>
  );
};

export default LoginPage;

const CustomLink = styled(Link)`
  outline: none;
  background: buttonface;
  display: inline-block;
  text-decoration: none;
  width: 92%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--semibold);
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  &:hover {
    background: buttonface;
  }
`;

const Pstyle = styled.p`
  font-size: 15px;
`;
