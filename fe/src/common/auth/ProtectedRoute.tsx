import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const ProtectedRoute = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/app/login" replace />;
  }

  return children;
};
