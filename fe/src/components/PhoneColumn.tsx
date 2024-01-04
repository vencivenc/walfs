import React from "react";
import { PhoneOutlined } from "@ant-design/icons";

export const PhoneColumn = (phoneNumber: string) => (
  <>
    {phoneNumber && phoneNumber.length > 0 && (
      <a style={{ whiteSpace: "nowrap" }} href={"tel:" + phoneNumber}>
        <PhoneOutlined /> {phoneNumber}
      </a>
    )}
  </>
);
