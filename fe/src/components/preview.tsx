import React from "react";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

interface PreviewProps {
  link: string;
}

export const Preview = ({ link }: PreviewProps) => (
  <Link to={link}>
    <EyeOutlined />{" "}
  </Link>
);
