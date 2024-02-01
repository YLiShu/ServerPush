import { Card, Space } from "antd";
import React from "react";

export const Comet: React.FC = () => {
  return (
    <>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card hoverable>
          <h2>基于HTTP的长轮询（long-polling）</h2>
        </Card>
        <Card hoverable>
          <h2>基于iframe的长连接流（stream）模式</h2>
          <h3></h3>
        </Card>
      </Space>
    </>
  );
};
