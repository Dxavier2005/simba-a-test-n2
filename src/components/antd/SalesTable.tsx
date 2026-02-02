import React from "react";
import { Table, Tag, Typography } from "antd";

const { Title } = Typography;

type RowData = {
  key: string;
  customer: string;
  total: number;
  status: "paid" | "pending" | "failed";
};

const data: RowData[] = [
  { key: "1", customer: "Empresa A", total: 1200, status: "paid" },
  { key: "2", customer: "Empresa B", total: 740, status: "pending" },
  { key: "3", customer: "Empresa C", total: 310, status: "failed" },
];

export default function SalesTable() {
  return (
    <div style={{ marginTop: 24 }}>
      <Title level={4}>Últimas órdenes</Title>

      <Table<RowData>
        pagination={false}
        dataSource={data}
        columns={[
          { title: "Cliente", dataIndex: "customer" },
          { title: "Total", dataIndex: "total", render: (v: number) => `$${v}` },
          {
            title: "Estado",
            dataIndex: "status",
            render: (s: RowData["status"]) => (
              <Tag color={s === "paid" ? "green" : s === "pending" ? "gold" : "red"}>{s}</Tag>
            ),
          },
        ]}
      />
    </div>
  );
}