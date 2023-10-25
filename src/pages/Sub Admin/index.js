import { Button, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function SubAdmin() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Sub Admin</Typography.Title>
      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "User Name",
            dataIndex: "username",
          },
          {
            title: "Mobile Number",
            dataIndex: "mobilenumber",
          },
          {
            title: "Email ID",
            dataIndex: "email",
          },
          {
            title: "Actions",
            render: () => (
              <ButtonGroup>
                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <FaRegEdit size={16} />
                </Button>
                <Button
                  type="primary"
                  danger
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <MdOutlineDeleteOutline size={16} />
                </Button>
              </ButtonGroup>
            ),
          },
        ]}
      />
    </Space>
  );
}

export default SubAdmin;
