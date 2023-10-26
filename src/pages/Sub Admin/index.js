import { Button, Input, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function SubAdmin() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 10,
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

        <Button
          type="default"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: 5,
          }}
        >
          <AiOutlinePlus /> Add New
        </Button>
      </div>
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
            sorter: (record1, record2) => {
              return record1.name > record2.name;
            },
          },
          {
            title: "User Name",
            dataIndex: "username",
            sorter: (record1, record2) => {
              return record1.username > record2.username;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.username)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Mobile Number",
            dataIndex: "mobilenumber",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.mobilenumber)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Email ID",
            dataIndex: "email",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.email)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
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
