import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../redux/modules/authSlice";
import styled from "styled-components";

function Layout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <StNavContainer>
        <Link to="/">HOME</Link>
        <StRightNav>
          <Link to="/profile">PROFILE</Link>
          <span onClick={logoutHandler}>LOGOUT</span>
        </StRightNav>
      </StNavContainer>
      <Outlet />
    </>
  );
}

export default Layout;

const StNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
  font-size: 18px;
  font-weight: 600;
  user-select: none;

  & a {
    text-decoration: none;
  }

  & a,
  span {
    color: black;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const StRightNav = styled.div`
  display: flex;
  gap: 20px;
`;
