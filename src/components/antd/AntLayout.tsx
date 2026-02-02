import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

export default function AntLayout({ children }: { children: React.ReactNode }) {
  const items = [
    { key: "home", label: <NavLink to="/">Dashboard</NavLink> },
    { key: "about", label: <NavLink to="/about">About</NavLink> },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", fontWeight: 900, marginRight: 16 }}>SalesBoard</div>
        <Menu theme="dark" mode="horizontal" items={items} style={{ flex: 1 }} />
      </Header>

      <Content style={{ padding: "24px 16px", maxWidth: 1000, margin: "0 auto", width: "100%" }}>
        {children}
      </Content>
    </Layout>
  );
}