import { Button, Input, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

function Drivers() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Drivers</Typography.Title>
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
            title: "Name",
            dataIndex: "name",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.name)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Date Of Birth",
            dataIndex: "dob",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.dob)
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
            title: "License No",
            dataIndex: "license",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.license)
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
            title: "Privacy Policy Status",
            dataIndex: "privacy_policy",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.privacy_policy)
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
                <Button type="primary" danger size="small">
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

export default Drivers;
