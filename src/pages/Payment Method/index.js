import { Button, Input, Space, Switch, Table, Typography } from "antd";
import { useState } from "react";

function PaymentMethod() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      mode: "Apple Pay",
    },
    {
      mode: "Google Pay",
    },
    {
      mode: "PayTM",
    },
    {
      mode: "Cash",
    },
    {
      mode: "Card",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Payment Method</Typography.Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 200,
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
        style={{ width: "100%" }}
        dataSource={dataSource}
        loading={loading}
        pagination={false}
        columns={[
          {
            title: "Mode",
            dataIndex: "mode",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.mode)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Actions",
            render: () => <Switch defaultChecked />,
          },
        ]}
      />
    </Space>
  );
}

export default PaymentMethod;
