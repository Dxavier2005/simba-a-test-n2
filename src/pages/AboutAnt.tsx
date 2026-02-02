import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

export default function AboutAnt() {
  return (
    <>
      <Title level={3}>About (AntD)</Title>

      <Card>
        <ul style={{ margin: 0 }}>
          <li>Fase LAB: 5 ejemplos aislados</li>
          <li>Fase Home: dashboard temático (KPIs, progreso, tabla)</li>
        </ul>
      </Card>
    </>
  );
}

