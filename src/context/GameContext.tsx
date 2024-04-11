import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GameDto} from "../dto/game.dto";
import {GAME_STORAGE_KEY} from "../common/constants";

type GameContextType = {
  game: GameDto | null;
  setGame: (game: GameDto | null) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

function useGame(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within an UserProvider");
  }
  return context;
}

const GameProvider = (props: { children: ReactNode }): ReactElement => {
  const [game, setGame] = useState<GameDto | null>(null);

  const setGameHandler = (data: GameDto | null): void => {
    setGame(data);
    AsyncStorage.setItem(GAME_STORAGE_KEY, data != null ? JSON.stringify(data) : '').then(_ => {});
  }

  return <GameContext.Provider {...props} value={{game, setGame: setGameHandler}} />;
};

export {GameProvider, useGame};
