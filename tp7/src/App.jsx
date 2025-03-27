import React, { useState } from "react"
import LEDControl from "./views/LEDControl"
import UserLEDState from "./views/UserLEDState"
import UserStatus from "./views/UserStatus"
import { AuthContext, initialAuth } from './contexts'
import { Flex, Layout } from 'antd';
import { contentStyle, footerStyle, headerStyle, layoutStyle, siderStyle } from "./views/app-layout"
import LoginButton from "./views/LoginButton"

const { Header, Footer, Sider, Content } = Layout;

function App() {

  let [auth, setAuth] = useState(initialAuth);

  return (
    <>
      <AuthContext.Provider value={[auth, setAuth]}>
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>
              <Flex align="center" gap="middle" vertical={false} justify="space-between">
                <span>My led app</span>
                <LoginButton />
              </Flex>
            </Header>
            <Layout>
              <Sider style={siderStyle}>
                <UserStatus />
              </Sider>
              <Content style={contentStyle}><UserLEDState /></Content>
              <Sider style={siderStyle}>
                <LEDControl />
              </Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Flex>
      </AuthContext.Provider>
    </>
  );
}

export default App
