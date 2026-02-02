import React, { useState } from "react";
import { Alert, Button, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function LabAntAlert() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Title level={3} style={{ marginBottom: 6 }}>LAB: Alert</Title>
      <Paragraph type="secondary">Alert con show/hide (estado).</Paragraph>

      <Space direction="vertical" style={{ width: "100%" }}>
        {show && (
          <Alert
            message="✅ Operación exitosa (demo)"
            type="success"
            showIcon
            closable
            onClose={() => setShow(false)}
          />
        )}

        <Button onClick={() => setShow(true)}>Mostrar alert</Button>
      </Space>
    </div>
  );
}