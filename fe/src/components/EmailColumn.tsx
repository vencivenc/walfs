import React from "react";
import { MailOutlined } from "@ant-design/icons";

export const EmailColumn = (email: string) => (
  <a style={{ whiteSpace: "nowrap" }} href={"mail:" + email}>
    <MailOutlined /> {email}
  </a>
);
