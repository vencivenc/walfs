import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const LogoutRoute = () => {
  const { onLogout } = useUser();

  onLogout();

  return <Navigate to="/app/login" replace />;
};
