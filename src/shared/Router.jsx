import React from "react";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "pages/Profile";
import Login from "pages/Login";
import { useSelector } from "react-redux";
import Layout from "components/Layout/Layout";

function Router() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
