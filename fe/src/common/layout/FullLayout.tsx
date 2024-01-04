import { Layout } from "antd";
import * as React from "react";

const { Content } = Layout;

const FullLayout = function ({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            display: "flex",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            alignContent: "space-around",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default FullLayout;
