import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { AppService } from "../../services/App.service";
import { UserDto } from "../../dto/user.dto";
import FullLayout from "../layout/FullLayout";

export interface UserContextInterface {
  onLogin: (user: UserDto) => void;
  onLogout: () => void;
  user: UserDto | null;
}

const defaultUserContext = {
  onLogin: async () => {},
  onLogout: () => {},
  user: null,
};

export const UserContext =
  React.createContext<UserContextInterface>(defaultUserContext);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      // const user = await AppService.tryIsLoggedIn();
      // if (user) {
      //   handleLogin(user);
      // }
      setLoading(false);
    })();
  }, []);

  const handleLogin = (user: UserDto) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  if (loading) {
    return (
      <FullLayout>
        <LoadingOutlined style={{ fontSize: "5em" }} />
      </FullLayout>
    );
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
