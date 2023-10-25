import { Input, Space, Table, Typography } from "antd";
import { useState } from "react";

function CustomerComplatints() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      orderref: "CC-1002",
      customer: "Karthik",
      title: "Late Delivery",
      desc: "test description",
      contactinfo: "8807443477",
    },
    {
      orderref: "CC-1009",
      customer: "Thamizh",
      title: "Rude Driver",
      desc: "test description",
      contactinfo: "91872871872",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customer Complaints</Typography.Title>
      <Input.Search
        placeholder="Search here..."
        onSearch={(value) => {
          setSearchedText(value);
        }}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        columns={[
          {
            title: "Order Reference",
            dataIndex: "orderref",
            filteredValue: [searchedText],
            sorter: (record1, record2) => {
              return record1.orderref > record2.orderref;
            },
            onFilter: (value, record) => {
              return String(record.orderref)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Customer Name",
            dataIndex: "customer",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.customer)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Title",
            dataIndex: "title",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.title)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Description",
            dataIndex: "desc",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.desc)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Contact Information",
            dataIndex: "contactinfo",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.contactinfo)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
        ]}
      />
    </Space>
  );
}

export default CustomerComplatints;
