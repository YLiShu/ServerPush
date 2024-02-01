import React from "react";
import { Layout, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SimplePoll } from "./pages/SimplePoll";
import { ServerPush } from "./pages/ServerPush";
import { useState } from "react";
import { Comet } from "./pages/Comet";
import { ServerSentEvents } from "./pages/SSE";
import { WebSocketPage } from "./pages/WebSocketPage";

const { Header, Content, Footer } = Layout;
const menus = [
  {
    key: "/",
    label: "实时数据推送技术详解",
    component: ServerPush,
  },
  {
    key: "/simplepoll",
    label: "简易轮询",
    component: SimplePoll,
  },
  { key: "/comet", label: "COMET", component: Comet },
  { key: "/sse", label: "SSE", component: ServerSentEvents },
  {
    key: "/webSocketPage",
    label: "WebSocket",
    component: WebSocketPage,
  },
];
const App: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<string>(
    window.location.pathname
  );
  const setSelected = ({ key }: any) => {
    setSelectedPath(key);
    navigate(key);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedPath || "/simplepoll"]}
          onClick={setSelected}
          items={menus}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: 24,
            height: "100%",
          }}
        >
          <Routes>
            {menus.map((menu) => (
              <Route
                key={menu.key}
                path={menu.key}
                element={<menu.component />}
              />
            ))}
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        POIZON ©{new Date().getFullYear()} Created by POIZON
      </Footer>
    </Layout>
  );
};
export default App;
