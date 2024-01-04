import React from "react";
import { cars_ship_usermanagement_dtos_v2_V2UserAccountDto } from "../dto/user-management";
import { Avatar, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface UserNameRenderProps {
  user: cars_ship_usermanagement_dtos_v2_V2UserAccountDto;
}

export const UserNameRender = ({ user }: UserNameRenderProps) => (
  <Space
    style={{ minWidth: "12em", maxWidth: "12em", whiteSpace: "break-spaces" }}
  >
    <div>
      {user.profilePictureUrl && (
        <Avatar size="default" src={user.profilePictureUrl} />
      )}
      {!user.profilePictureUrl && (
        <div style={{ padding: "3px 13px", cursor: "pointer" }}>
          <UserOutlined />
        </div>
      )}
    </div>
    <Text>{user.name}</Text>
  </Space>
);
