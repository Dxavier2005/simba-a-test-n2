import React from "react";
import { Card, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function LabAntCard() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Title level={3} style={{ marginBottom: 6 }}>LAB: Card</Title>
      <Paragraph type="secondary">Card con title + action.</Paragraph>

      <Card title="Card AntD" style={{ maxWidth: 520 }}>
        <p style={{ marginTop: 0 }}>Contenido dentro de la tarjeta.</p>
        <Button type="primary">Acción</Button>
      </Card>
    </div>
  );
}