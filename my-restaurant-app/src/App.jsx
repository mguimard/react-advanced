import {
  EditOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Carte from "./Carte";
import GestionCarte from "./GestionCarte";
import { CarteContext } from "./contexts";
import { initialCarte } from "./initial-data";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [carte, setCarte] = useState(initialCarte);

  return (
    <CarteContext.Provider value={[carte, setCarte]}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <MenuOutlined />
              <span>Menu</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <EditOutlined />
              <span>Gestion carte</span>
              <Link to="/gestion-carte" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <span style={{ fontSize: 16 }}>My restaurant app</span>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Routes>
              <Route path="/" element={<Carte />} />
              <Route path="gestion-carte" element={<GestionCarte />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </CarteContext.Provider>
  );
}

export default App;
