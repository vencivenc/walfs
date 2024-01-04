import React from "react";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

interface EditProps {
  link: string;
}

export const Edit = ({ link }: EditProps) => (
  <Link to={link}>
    <EditOutlined />
  </Link>
);
