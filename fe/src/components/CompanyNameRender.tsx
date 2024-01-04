import React from "react";
import { cars_ship_usermanagement_dtos_v2_V2CompanyDto } from "../dto/user-management";
import { Avatar, Space, Typography } from "antd";
import { ContainerOutlined } from "@ant-design/icons";
import { CompanyDto } from "../dto/pusher/company.dto";

const { Text } = Typography;

interface CompanyNameRenderProps {
  company:
    | cars_ship_usermanagement_dtos_v2_V2CompanyDto
    | CompanyDto
    | undefined;
}

export const CompanyNameRender = ({ company }: CompanyNameRenderProps) => (
  <Space
    style={{ minWidth: "12em", maxWidth: "12em", whiteSpace: "break-spaces" }}
  >
    {!company && <Text>None</Text>}
    {company && (
      <>
        <div>
          {company.logoUrl && <Avatar size="default" src={company.logoUrl} />}
          {!company.logoUrl && (
            <div style={{ padding: "3px 13px", cursor: "pointer" }}>
              <ContainerOutlined />
            </div>
          )}
        </div>
        <Text>{company.name}</Text>
      </>
    )}
  </Space>
);
