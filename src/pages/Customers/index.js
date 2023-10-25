import { Button, Input, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

function Customer() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
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
            title: "First Name",
            dataIndex: "firstname",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.firstname)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Last Name",
            dataIndex: "lastname",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.lastname)
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
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <GrMapLocation size={16} />
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

export default Customer;
