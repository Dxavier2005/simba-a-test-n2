import React from "react";
import { Card, Col, Row, Statistic } from "antd";

export default function SalesKpis() {
  return (
    <div style={{ marginTop: 16 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Ventas (USD)" value={12840} precision={0} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Órdenes" value={342} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Conversión" value={3.4} suffix="%" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}