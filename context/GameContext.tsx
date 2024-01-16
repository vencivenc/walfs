import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserDto} from "../dto/user.dto";
import {GameDto} from "../dto/game.dto";
import {GAME_STORAGE_KEY, USER_STORAGE_KEY} from "../common/constants";

type AuthContextType = {
  user: UserDto | null;
  game: GameDto | null;
  setUser: (user: UserDto | null) => void;
  setGame: (game: GameDto | null) => void;
};

const UserContext = createContext<AuthContextType | undefined>(undefined);

function useUser(): AuthContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
}

const UserProvider = (props: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [game, setGame] = useState<GameDto | null>(null);

  const setUserHandler = (data: UserDto | null): void => {
    setUser(data);
    AsyncStorage.setItem(USER_STORAGE_KEY, data != null ? JSON.stringify(data) : '').then(_ => {});
  }
  const setGameHandler = (data: GameDto | null): void => {
    setGame(data);
    AsyncStorage.setItem(GAME_STORAGE_KEY, data != null ? JSON.stringify(data) : '').then(_ => {});
  }

  return <UserContext.Provider {...props} value={{user, setUser: setUserHandler, game, setGame: setGameHandler}} />;
};

export {UserProvider, useUser};
