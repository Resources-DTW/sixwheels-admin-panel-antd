import {
  Input,
  Space,
  Table,
  Typography,
  Select,
  DatePicker,
  Button,
} from "antd";
import { useState } from "react";

function OrderReports() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Order Reports</Typography.Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Space direction="horizontal">
          <Input.Search
            placeholder="Search here..."
            onSearch={(value) => {
              setSearchedText(value);
            }}
            onChange={(e) => setSearchedText(e.target.value)}
          />
        </Space>
        <Space direction="horizontal">
          <Select
            defaultValue="Select Status"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "new",
                label: "New",
              },
              {
                value: "delivered",
                label: "Delivered",
              },
              {
                value: "rejected",
                label: "Rejected",
              },
            ]}
          />
          <Select
            defaultValue="Tanker Type"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "sewage",
                label: "Sewage Tank",
              },
              {
                value: "water",
                label: "Water Tank",
              },
              {
                value: "both",
                label: "Both",
              },
            ]}
          />
          <RangePicker
            showTime={{
              format: "HH:mm",
            }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
          />
        </Space>
        <Button type="primary">Search</Button>
      </div>
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
            title: "Service Provider Name",
            dataIndex: "service_provider_name",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.service_provider_name)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Service",
            dataIndex: "service",
            filteredValue: [searchedText],
            sorter: (record1, record2) => {
              return record1.service > record2.service;
            },
            onFilter: (value, record) => {
              return String(record.service)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Cost",
            dataIndex: "cost",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.cost)
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
            title: "Start Date",
            dataIndex: "startdate",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.startdate)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "End Date",
            dataIndex: "enddate",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.enddate)
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
        ]}
      />
    </Space>
  );
}

export default OrderReports;
