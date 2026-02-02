import React, { useState } from "react";
import { Alert, Button, Form, Input, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function LabAntForm() {
  const [ok, setOk] = useState(false);

  const onFinish = (values: { email: string }) => {
    setOk(true);
    setTimeout(() => setOk(false), 2000);
    console.log("values:", values);
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Title level={3} style={{ marginBottom: 6 }}>LAB: Form</Title>
      <Paragraph type="secondary">Form con validación (required + email).</Paragraph>

      {ok && <Alert type="success" showIcon message="✅ Enviado (demo)" style={{ marginBottom: 12 }} />}

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 520 }}>
        <Form.Item
          label="Correo"
          name="email"
          rules={[
            { required: true, message: "Ingresa tu correo" },
            { type: "email", message: "Formato inválido" },
          ]}
        >
          <Input placeholder="correo@dominio.com" />
        </Form.Item>

        <Button type="primary" htmlType="submit">Enviar</Button>
      </Form>
    </div>
  );
}