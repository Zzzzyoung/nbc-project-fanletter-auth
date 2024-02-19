import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <StLoginContainer>
      <StLoginForm>
        <STLoginTitle>{isLogin ? "로그인" : "회원가입"}</STLoginTitle>
        <StLoginInput>
          <input
            type="text"
            placeholder="아이디 (4~10글자)"
            minLength={4}
            maxLength={10}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호 (4~15글자)"
            minLength={4}
            maxLength={15}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {!isLogin && (
            <input
              type="text"
              placeholder="닉네임 (1~10글자)"
              minLength={1}
              maxLength={10}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          )}
        </StLoginInput>
        <StLoginButton>{isLogin ? "로그인" : "회원가입"}</StLoginButton>
        <StToggleText>
          <span
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "회원가입" : "로그인"}
          </span>
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
  user-select: none;
`;

const STLoginTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-top: 10px;
`;

const StLoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & input {
    padding: 8px 5px;
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
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

const StToggleText = styled.div`
  text-align: center;
  font-size: 15px;
  color: darkgray;

  & span {
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;
