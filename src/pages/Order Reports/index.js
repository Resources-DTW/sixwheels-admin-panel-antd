import { Input, Space, Table, Typography } from "antd";
import { useState } from "react";

function OrderReports() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Live Orders</Typography.Title>
      <Space direction="horizontal">
        <Input.Search
          placeholder="Search here..."
          onSearch={(value) => {
            setSearchedText(value);
          }}
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </Space>
      <Table
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        columns={[
          {
            title: "Order ID",
            dataIndex: "orderid",
            filteredValue: [searchedText],
            sorter: (record1, record2) => {
              return record1.orderid > record2.orderid;
            },
            onFilter: (value, record) => {
              return String(record.orderid)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Customer Name",
            dataIndex: "customer",
            filteredValue: [searchedText],
            sorter: (record1, record2) => {
              return record1.customer > record2.customer;
            },
            onFilter: (value, record) => {
              return String(record.customer)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Service",
            dataIndex: "service",
            filteredValue: [searchedText],
            filters: [
              { text: "Water Service", value: true },
              { text: "Sewage Service", value: false },
            ],
            onFilter: (value, record) => {
              return record.service === value;
            },
            onFilter: (value, record) => {
              return String(record.service)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Date",
            dataIndex: "date",
            filteredValue: [searchedText],
            sorter: (record1, record2) => {
              return record1.date > record2.date;
            },
            onFilter: (value, record) => {
              return String(record.date)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Track Tanker",
            dataIndex: "tracktanker",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.tracktanker)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Customer Address",
            dataIndex: "customeraddress",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.customeraddress)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Status",
            dataIndex: "status",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.status)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Track",
            dataIndex: "track",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.track)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
        ]}
      />
    </Space>
  );
}

export default OrderReports;
