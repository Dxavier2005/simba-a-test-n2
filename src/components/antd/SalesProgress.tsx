import React from "react";
import { Card, Progress, Typography } from "antd";

const { Title } = Typography;

export default function SalesProgress() {
  return (
    <div style={{ marginTop: 24 }}>
      <Title level={4}>Objetivos</Title>

      <Card>
        <p style={{ marginTop: 0 }}>Meta mensual</p>
        <Progress percent={68} />
        <p style={{ marginBottom: 0, color: "rgba(0,0,0,.65)" }}>
          68% completado (demo).
        </p>
      </Card>
    </div>
  );
}