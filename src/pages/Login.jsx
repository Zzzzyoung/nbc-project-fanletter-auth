import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StLoginContainer>
      <StLoginForm>
        <STLoginTitle>로그인</STLoginTitle>
        <StLoginInput>
          <input
            type="text"
            placeholder="아이디 (4~10글자)"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호 (4~15글자)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </StLoginInput>
        <StLoginButton>로그인</StLoginButton>
        <StToggleText>
          <span>회원가입</span>
        </StToggleText>
      </StLoginForm>
    </StLoginContainer>
  );
}

export default Login;

const StLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 25px 30px;
  background-color: white;
  border-radius: 10px;
  width: 400px;
`;

const STLoginTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 8px 0px 5px 0px;
`;

const StLoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & input {
    padding: 7px 5px;
    border: none;
    border-bottom: 1px solid darkgray;
    outline: none;
  }
`;

const StLoginButton = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: darkgray;
  color: white;
  border: 1px solid gray;
  cursor: pointer;
`;

const StToggleText = styled.div`
  text-align: center;
  font-size: 15px;
  color: darkgray;

  & span {
    cursor: pointer;
  }
`;
