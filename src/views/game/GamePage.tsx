import React, {useEffect, useState} from "react";

import {
  Text,
} from "@gluestack-ui/themed";
import {ScrollView} from "react-native";
import {supabase} from "../../common/superbase";
import {GameDto} from "../../dto/game.dto";
import GameListItem from "./GameListItem";

const GamePage = ({isActive}: any) => {
  const [games, setGames] = useState<GameDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    (async () => {
      setLoading(true);

      try {
        const {data, error} = await supabase.from('games').select<string, GameDto>();
        setGames(data || []);
      } finally {
        setLoading(false);
      }
    })();
  }, [isActive]);

  return (
    <ScrollView style={{display: isActive ? "flex" : "none"}}>
      <GameListItem />
      <Text>Game</Text>
    </ScrollView>
  );
};

export default GamePage;
