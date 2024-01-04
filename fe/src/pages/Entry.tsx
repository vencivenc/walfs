import Page from "../common/layout/Page";
import {Checkbox, Statistic, Button} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {AppService} from "../services/App.service";

const characters = [
  {name: "Върколак", points: -6},
  {name: "Върколак", points: -6},
  {name: "Върколак", points: -6},
  {name: "Върколак", points: -6},
  {name: "Върколак", points: -6},
  {name: "Върколак", points: -6},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Селянин", points: 1},
  {name: "Гадател", points: 6},
  {name: "Вещица", points: 6},
  {name: "Лечител", points: 4},
  {name: "Ловец", points: 3},
  {name: "Червена шапчица", points: 3},
  {name: "Купидон", points: -2},
  {name: "Кмет", points: 3},
]

const getCharPoints = (hero: string) => {
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (char.name === hero) {
      return char.points;
    }
  }

  return 0;
}

export const Entry = () => {
  const [selected, setSelected] = useState<any[]>([]);

  const add = (char: string) => {
    setSelected([...selected, char]);
  }

  const remove = (char: string) => {
    if (selected.indexOf(char) !== -1) {
      const tmp = [...selected]
      tmp.splice(selected.indexOf(char), 1)
      setSelected(tmp)
    }
  }

  const start = () => {
    AppService.start(selected)
  }

  let points = 0;
  for (let i = 0; i < selected.length; i++) {
    points += getCharPoints(selected[i])
  }

  return (<Page breadcrumbs={[{to: "/app", label: "Dashboard"}]} fill={false}>
      {characters.map(character => {
        return <Checkbox onChange={(e) => {
          e.target.checked ? add(character.name) : remove(character.name)
        }}>{character.name}</Checkbox>
      })}

      <Statistic
        title="Точки"
        value={points}
        precision={0}
        valueStyle={{
          color: points < 0 ? "#cf1322" :
            "#005830"
        }}
        prefix={points < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
      />

      <Button type="primary" onClick={() => start()}>Start</Button>
    </Page>
  );
}
