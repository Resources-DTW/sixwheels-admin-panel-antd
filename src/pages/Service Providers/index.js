import { Input, Space, Table, Typography } from "antd";
import { useState } from "react";

function ServiceProviders() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-001",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
    {
      firstname: "Karthik",
      lastname: "N",
      type_of_service_offering: "Water Tank",
      companynumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      companyname: "Sixwheels Water Service",
      company_cr_number: "CR-002",
      companytiming: "10:00AM To 6:00PM",
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Service Providers</Typography.Title>
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
            title: "Type of service offering",
            dataIndex: "type_of_service_offering",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.type_of_service_offering)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company Contact Number",
            dataIndex: "companynumber",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companynumber)
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
            title: "Company Name",
            dataIndex: "companyname",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companyname)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company CR Number",
            dataIndex: "company_cr_number",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.company_cr_number)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company Timing",
            dataIndex: "companytiming",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companytiming)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
        ]}
      />
    </Space>
  );
}

export default ServiceProviders;
