import {Layout} from "antd";
import React, {PropsWithChildren, ReactNode} from "react";
import {useUser} from "../hooks/useUser";

const {Content} = Layout;

interface BreadcrumbInterface {
  to?: string;
  label: string;
}

interface PageProps extends PropsWithChildren {
  top?: ReactNode;
  fill?: boolean;
  breadcrumbs?: BreadcrumbInterface[];
}

const Page = ({children, fill = true}: PageProps) => {
  const {user, onLogout} = useUser();

  if (!user) {
    return;
  }

  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}
    >
      <>
        {fill && (
          <div
            className="site-layout-background"
            style={{
              padding: 24,
            }}
          >
            {children}
          </div>
        )}
        {!fill && children}
      </>
    </Content>
  );
};

export default Page;
