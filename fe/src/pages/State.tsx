import Page from "../common/layout/Page";
import {Space} from "antd";
import React from "react";
import {StateDto} from "../dto/state.dto";

interface IStateProps {
  state: StateDto;
}

export const State = ({state}: IStateProps) => {

  return (<Page breadcrumbs={[{to: "/app", label: "Dashboard"}]} fill={false}>
      <Space direction="vertical">
      {state.players.map(character => {
        return <Space >{character.character} - {character.name}</Space>
      })}
      </Space>
    </Page>
  );
}
