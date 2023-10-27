import { Button, Input, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { HiShoppingCart } from "react-icons/hi";

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
                <Button size="small">
                  <FaRegEdit size={12} />
                </Button>
                <Button size="small">
                  <GrMapLocation size={12} />
                </Button>
                <Button size="small">
                  <HiShoppingCart size={12} />
                </Button>
                <Button size="small" type="primary" danger>
                  <MdOutlineDeleteOutline size={12} />
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
