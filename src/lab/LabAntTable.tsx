import React from "react";
import { Table, Tag, Typography } from "antd";

const { Title, Paragraph } = Typography;

type RowData = {
  key: string;
  name: string;
  age: number;
  status: "ok" | "warn" | "err";
};

const data: RowData[] = [
  { key: "1", name: "Juan", age: 30, status: "ok" },
  { key: "2", name: "Ana", age: 25, status: "warn" },
  { key: "3", name: "Luis", age: 28, status: "err" },
];

export default function LabAntTable() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Title level={3} style={{ marginBottom: 6 }}>LAB: Table</Title>
      <Paragraph type="secondary">Table con render custom (Tag).</Paragraph>

      <Table<RowData>
        pagination={false}
        dataSource={data}
        columns={[
          { title: "Nombre", dataIndex: "name" },
          { title: "Edad", dataIndex: "age" },
          {
            title: "Estado",
            dataIndex: "status",
            render: (s: RowData["status"]) => (
              <Tag color={s === "ok" ? "green" : s === "warn" ? "gold" : "red"}>{s}</Tag>
            ),
          },
        ]}
      />
    </div>
  );
}

