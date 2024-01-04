import React from "react";
import { Tag } from "antd";

export const ActiveColumn = (active: boolean) => (
  <Tag color={active ? "green" : "volcano"}>
    {active ? "Active" : "Deactived"}
  </Tag>
);
