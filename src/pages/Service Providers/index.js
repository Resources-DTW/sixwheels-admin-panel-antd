import { Image, Input, Layout, Menu, Space, Table, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { useState, useEffect } from "react";
import MainHeader from "../../components/MainHeader";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineAdminPanelSettings, MdOutlinePayment } from "react-icons/md";
import { BsCarFront, BsStarHalf, BsFillBuildingFill } from "react-icons/bs";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line, RiAdvertisementLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

function ServiceProviders() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/provider"
      );
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
    <Layout className="container">
      <Sider
        style={{
          backgroundColor: "#35A8DF",
          // borderRadius: 16,
          marginTop: -10,
          marginLeft: -10,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Image
          width={60}
          src={Logo}
          alt="Logo"
          preview={false}
          style={{
            margin: 10,
          }}
        />
        <Menu
          style={{ backgroundColor: "#35A8DF", color: "white" }}
          mode="inline"
          defaultSelectedKeys={["/service_providers"]}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/dashboard",
              icon: <BiHomeAlt2 />,
              label: "Dashboard",
            },
            {
              key: "/sub_admin",
              icon: <FaUserSecret />,
              label: "Sub Admin",
            },
            {
              key: "/sub_admin_privileges",
              icon: <MdOutlineAdminPanelSettings />,
              label: "Sub Admin Privileges",
            },
            {
              key: "/service_providers",
              icon: <BsFillBuildingFill />,
              label: "Service Providers",
            },
            {
              key: "/drivers",
              icon: <BsCarFront />,
              label: "Drivers",
            },
            {
              key: "/customers",
              icon: <FaUsers />,
              label: "Customers",
            },
            {
              key: "/customer_complaints",
              icon: <RiCustomerService2Line />,
              label: "Customer Complaints",
            },
            {
              key: "/live_orders",
              icon: <FaTruckFast />,
              label: "Live Orders",
            },
            {
              key: "/order_reports",
              icon: <TbReportSearch />,
              label: "Order Reports",
            },
            {
              key: "/promotions",
              icon: <RiAdvertisementLine />,
              label: "Promotion",
            },
            {
              key: "/payment_method",
              icon: <MdOutlinePayment />,
              label: "Payment Method",
            },
            {
              key: "/review_page",
              icon: <BsStarHalf />,
              label: "Review Page",
            },
            {
              key: "/order_settings",
              icon: <FiSettings />,
              label: "Order Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <MainHeader />
        <Content className="content">
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
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Copyrights © 2023 <strong>Sixwheels</strong>. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ServiceProviders;
