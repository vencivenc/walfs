import React from "react";
import { Link } from "react-router-dom";
import { Space } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

export const LinkCompanyColumn = (record: any) => {
  let companyId: string;
  if (record?.id) {
    companyId = record.id;
  } else {
    companyId = record;
  }

  return (
    <>
      {companyId && companyId.length > 0 && (
        <Space
          style={{
            minWidth: "10em",
            maxWidth: "10em",
          }}
        >
          <Link
            style={{ whiteSpace: "nowrap" }}
            to={"/app/user-management/users?companyId=" + companyId}
          >
            <UsergroupAddOutlined />
          </Link>
          <Link
            style={{
              whiteSpace: "break-spaces",
              overflowWrap: "anywhere",
            }}
            to={"/app/user-management/companies/" + companyId}
          >
            {companyId}
          </Link>
        </Space>
      )}
    </>
  );
};
