import React from "react";
import { Tag } from "antd";

interface StatusProps {
  statusCode: number;
  status: string;
  onClick: (status: number) => void;
}

const getColorFromStatusCode = (statusCode: number) => {
  if (statusCode < 300) {
    return "green";
  }

  if (statusCode < 400) {
    return "yellow";
  }

  return "red";
};

export const Status = ({ status, statusCode, onClick }: StatusProps) => {
  const onTagClick = () => {
    onClick(statusCode);
  };

  return (
    <Tag
      color={getColorFromStatusCode(statusCode)}
      onClick={onTagClick}
      style={{ cursor: "pointer" }}
    >
      {status}
    </Tag>
  );
};
