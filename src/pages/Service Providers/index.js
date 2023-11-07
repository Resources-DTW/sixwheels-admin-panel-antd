import { Input, Space, Table, Typography } from "antd";
import { useState, useEffect } from "react";

function ServiceProviders() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/provider");
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts.
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures this runs only once.

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Service Providers</Typography.Title>
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
            dataIndex: "firstName",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.firstName)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.lastName)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Type of service offering",
            dataIndex: "services",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.services)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company Contact Number",
            dataIndex: "mobileNumber",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.mobileNumber)
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
            dataIndex: "companyName",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companyName)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company CR Number",
            dataIndex: "companyCR",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companyCR)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Company Timing",
            dataIndex: "companyTiming",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.companyTiming)
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
