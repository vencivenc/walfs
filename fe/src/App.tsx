import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Authorized from "./common/layout/Authorized";
import { UserProvider } from "./common/auth/UserProvider";
import { ProtectedRoute } from "./common/auth/ProtectedRoute";
import Login from "./pages/login/Login";
import { Dashboard } from "./pages/Dashboard";

import "./index.less";
import { LogoutRoute } from "./common/auth/LgoutRoute";

const App = () => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3c117f",
        },
      }}
    >
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="app/login" element={<Login />} />
            <Route path="app/logout" element={<LogoutRoute />} />
            <Route path="app" element={<Authorized />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="" element={<Navigate to="app" />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ConfigProvider>
);

export default App;
