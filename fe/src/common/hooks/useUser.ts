import React from "react";
import { UserContext } from "../auth/UserProvider";

export const useUser = () => {
  return React.useContext(UserContext);
};
