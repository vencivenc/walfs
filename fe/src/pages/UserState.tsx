import Page from "../common/layout/Page";
import {Space} from "antd";
import React from "react";
import {StateDto} from "../dto/state.dto";

interface IStateProps {
  state: StateDto;
  name: String;
}

export const UserState = ({state, name}: IStateProps) => {
  const character = state.players.find(char => char.name === name);

  return (<Page breadcrumbs={[{to: "/app", label: "Dashboard"}]} fill={false}>
      { character && character.character}
    </Page>
  );
}
