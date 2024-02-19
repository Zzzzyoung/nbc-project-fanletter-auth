import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/authSlice";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const dispatch = useDispatch();

  const onChangeIdHandler = (e) => {
    const value = e.target.value;
    setId(value);
    setIsIdValid(value.length >= 4 && value.length <= 10);
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 4 && value.length <= 15);
  };

  const onChangeNicknameHandler = (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameValid(value.length >= 1 && value.length <= 10);
  };

  const inputValidCondition = showLogin
    ? !isIdValid || !isPasswordValid
    : !isIdValid || !isPasswordValid || !isNicknameValid;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (showLogin) {
      // 로그인
      try {
        const { data } = await axios.post(
          "https://moneyfulpublicpolicy.co.kr/login",
          {
            id,
            password,
          }
        );

        console.log("data", data);

        if (data.success) {
          localStorage.setItem("accessToken", data.accessToken);

          dispatch(login());
          toast.success("로그인 성공!");
        }
      } catch (error) {
        console.error("error", error);
        toast.error(error.response.data.message);
      }
    } else {
      // 회원가입
      try {
        const { data } = await axios.post(
          "https://moneyfulpublicpolicy.co.kr/register",
          { id, password, nickname }
        );

        console.log("data", data);

        if (data.success) {
          setShowLogin(true);
          setId("");
          setPassword("");
          setNickname("");
          toast.success("회원가입 성공!");
        }
      } catch (error) {
        console.error("error", error);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <StLoginContainer>
      <StLoginForm onSubmit={onSubmitHandler}>
        <STLoginTitle>{showLogin ? "로그인" : "회원가입"}</STLoginTitle>
        <StLoginInput>
          <input
            type="text"
            placeholder="아이디 (4~10글자)"
            minLength={4}
            maxLength={10}
            value={id}
            onChange={onChangeIdHandler}
          />
          <input
            type="password"
            placeholder="비밀번호 (4~15글자)"
            minLength={4}
            maxLength={15}
            value={password}
            onChange={onChangePasswordHandler}
          />
          {!showLogin && (
            <input
              type="text"
              placeholder="닉네임 (1~10글자)"
              minLength={1}
              maxLength={10}
              value={nickname}
              onChange={onChangeNicknameHandler}
            />
          )}
        </StLoginInput>
        <StLoginButton disabled={inputValidCondition}>
          {showLogin ? "로그인" : "회원가입"}
        </StLoginButton>
        <StToggleText>
          <span
            onClick={() => {
              setShowLogin(!showLogin);
            }}
          >
            {showLogin ? "회원가입" : "로그인"}
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
  background-color: ${(props) => (props.disabled ? "darkgray" : "black")};
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
