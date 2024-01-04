import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Space, Typography } from "antd";

const { Text } = Typography;

export const DateTimeColumn = (date: string) => (
  <Space>
    <Text style={{ whiteSpace: "nowrap" }}>
      {"" + dayjs(date).format("YYYY-MM-DD HH:mm:ss")}
    </Text>
    <CalendarOutlined />
  </Space>
);
