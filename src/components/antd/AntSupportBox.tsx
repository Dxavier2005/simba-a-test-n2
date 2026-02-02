import React from "react";
import { Card, Button, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AntSupportBox() {
  return (
    <div style={{ marginTop: 24 }}>
      <Card>
        <Title level={4} style={{ marginTop: 0 }}>Centro de soporte</Title>
        <Paragraph type="secondary">
          En un dashboard real, aquí podrías enlazar reportes, tickets o documentación.
        </Paragraph>

        <Space wrap>
          <Button type="primary">Crear ticket</Button>
          <Button>Ver documentación</Button>
        </Space>
      </Card>
    </div>
  );
}