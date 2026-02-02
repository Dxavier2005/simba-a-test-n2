import React from "react";
import { Button, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function LabAntButtons() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Title level={3} style={{ marginBottom: 6 }}>LAB: Buttons</Title>
      <Paragraph type="secondary">Tipos: primary, default, dashed, link, text.</Paragraph>

      <Space wrap>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
        <Button type="text">Text</Button>
        <Button danger>Danger</Button>
      </Space>
    </div>
  );
}