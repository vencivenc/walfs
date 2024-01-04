import React from "react";
import { Tag } from "antd";

export const YseNoColumn = (flag: boolean) => (
  <Tag color={flag ? "green" : "volcano"}>{flag ? "Yes" : "No"}</Tag>
);
