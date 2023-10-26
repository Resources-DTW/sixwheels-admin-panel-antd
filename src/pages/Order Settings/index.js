import { Space, Typography, Select, Button } from "antd";

function OrderSettings() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Order Settings</Typography.Title>
      <Space direction="horizontal">
        <Space direction="horizontal">
          <Typography.Text>Email</Typography.Text>
          <Select
            defaultValue="yes"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "yes",
                label: "Yes",
              },
              {
                value: "no",
                label: "No",
              },
            ]}
          />
        </Space>
        <Space direction="horizontal">
          <Typography.Text>SMS</Typography.Text>
          <Select
            defaultValue="no"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "yes",
                label: "Yes",
              },
              {
                value: "no",
                label: "No",
              },
            ]}
          />
        </Space>
        <Button>Save</Button>
      </Space>
    </Space>
  );
}

export default OrderSettings;
