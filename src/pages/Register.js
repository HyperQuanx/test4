import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { registerAPI } from "../apis/newAccount";
import { checkAuthAPI } from "../apis/auth"; // 추가

const RegisterPage = () => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register); // 이 부분은 실제 상태 구조에 따라 변경해야 합니다.

  const [id, setId] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const [pw, setPw] = useState("");
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleRegister = () => {
    const userData = {
      email: id,
      password: pw,
    };

    dispatch(registerAPI(userData))
      .then(() => {
        // 회원가입 성공 후 유저 인증 확인
        dispatch(checkAuthAPI());
      })
      .catch((error) => {
        console.error("Registration Error:", error);

        if (error.response) {
          console.error("Server Response Data:", error.response.data);

          const errorMessage = error.response.data.message;

          if (errorMessage === "이미 가입된 이메일입니다.") {
            alert("이미 가입된 이메일입니다. 다른 이메일을 사용해주세요.");
          } else {
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
          }
        }
      });
  };

  return (
    <Container>
      <BoxStyle>
        <div>
          <h1>Register</h1>
          <IdPwBox>
            <p>Create name</p>
            <InputStyle
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
            />
            <p>Create Password</p>
            <InputStyle
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={onChangePw}
            />
          </IdPwBox>
          <ClickBox>
            <div>
              <ClickBoxStyle onClick={handleRegister}>
                계정 생성하기
              </ClickBoxStyle>
              <CustomLink to="/">로그인페이지로 돌아가기</CustomLink>
            </div>
          </ClickBox>
        </div>
      </BoxStyle>
    </Container>
  );
};

export default RegisterPage;

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
