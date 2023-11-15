import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  ); /* 부모 컴포넌트의 배경 색상 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const InputStyle = styled.input`
  width: 500px;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  border-radius: 5px;
  border-color: rgba(66, 245, 189, 0.4);
`;

export const BoxStyle = styled.div`
  border: 1px solid black;
  width: 800px;
  height: 600px;
  padding: 24px;
  position: relative; /* position 수정 */
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
`;

export const ClickBoxStyle = styled.button`
  outline: none;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: $white;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ClickBox = styled.div`
  margin-top: 20px;
`;

export const IdPwBox = styled.div`
  margin-top: 80px;
`;
