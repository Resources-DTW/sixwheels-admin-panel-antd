import { Image, Input, Layout, Menu, Space, Table, Typography } from "antd";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineAdminPanelSettings, MdOutlinePayment } from "react-icons/md";
import { BsCarFront, BsStarHalf, BsFillBuildingFill } from "react-icons/bs";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line, RiAdvertisementLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Content, Footer } from "antd/es/layout/layout";
import MainHeader from "../../components/MainHeader";
import Sider from "antd/es/layout/Sider";

function CustomerComplatints() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      orderref: "CC-1002",
      customer: "Karthik",
      title: "Late Delivery",
      desc: "test description",
      contactinfo: "8807443477",
    },
    {
      orderref: "CC-1009",
      customer: "Thamizh",
      title: "Rude Driver",
      desc: "test description",
      contactinfo: "91872871872",
    },
  ]);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

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
          defaultSelectedKeys={["/customer_complaints"]}
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
            <Typography.Title level={4}>Customer Complaints</Typography.Title>
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
                  title: "Order Reference",
                  dataIndex: "orderref",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.orderref > record2.orderref;
                  },
                  onFilter: (value, record) => {
                    return String(record.orderref)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Customer Name",
                  dataIndex: "customer",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.customer)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Title",
                  dataIndex: "title",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.title)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Description",
                  dataIndex: "desc",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.desc)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Contact Information",
                  dataIndex: "contactinfo",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.contactinfo)
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

export default CustomerComplatints;
