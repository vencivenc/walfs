import React from "react";
import { Link } from "react-router-dom";
import { Space } from "antd";

export const LinkUserColumn = (id: string) => (
  <Space
    style={{
      minWidth: "10em",
      maxWidth: "10em",
    }}
  >
    <Link
      style={{
        whiteSpace: "break-spaces",
        overflowWrap: "anywhere",
      }}
      to={"/app/user-management/users/" + id}
    >
      {id}
    </Link>
  </Space>
);
