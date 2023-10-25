import { Button, Input, Space, Switch, Table, Typography } from "antd";
import { useState } from "react";

function SubAdminPrivileges() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      menuname: "Dashboard",
    },
    {
      menuname: "Sub Admin",
    },
    {
      menuname: "Sub Admin Privileges",
    },
    {
      menuname: "Drivers",
    },
    {
      menuname: "Customers",
    },
    {
      menuname: "Customer Complaints",
    },
    {
      menuname: "Live orders",
    },
    {
      menuname: "Order Reports",
    },
    {
      menuname: "Promotions",
    },
    {
      menuname: "Payment Method",
    },
    {
      menuname: "Review Page",
    },
    {
      menuname: "Order Settings",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Sub Admin Privileges</Typography.Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <Input.Search
          placeholder="Search here..."
          onSearch={(value) => {
            setSearchedText(value);
          }}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <Button type="primary">Save</Button>
      </div>
      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={false}
        columns={[
          {
            title: "Menu Name",
            dataIndex: "menuname",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.menuname)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Privileges",
            render: () => <Switch defaultChecked />,
          },
        ]}
      />
    </Space>
  );
}

export default SubAdminPrivileges;
