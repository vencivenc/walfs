import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Authorized = () => (
  <Layout hasSider>
    <Layout
      className="site-layout"
    >
      <Outlet />
      <Footer />
    </Layout>
  </Layout>
);

export default Authorized;
