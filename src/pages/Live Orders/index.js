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

function LiveOrders() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
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
          defaultSelectedKeys={["/live_orders"]}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/",
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
            <Typography.Title level={4}>Live Orders</Typography.Title>
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
              loading={loading}
              pagination={{
                pageSize: 6,
              }}
              columns={[
                {
                  title: "Order ID",
                  dataIndex: "orderid",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.orderid > record2.orderid;
                  },
                  onFilter: (value, record) => {
                    return String(record.orderid)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Customer Name",
                  dataIndex: "customer",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.customer > record2.customer;
                  },
                  onFilter: (value, record) => {
                    return String(record.customer)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Service",
                  dataIndex: "service",
                  filteredValue: [searchedText],
                  filters: [
                    { text: "Water Service", value: true },
                    { text: "Sewage Service", value: false },
                  ],
                  onFilter: (value, record) => {
                    return record.service === value;
                  },
                  onFilter: (value, record) => {
                    return String(record.service)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Date",
                  dataIndex: "date",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.date > record2.date;
                  },
                  onFilter: (value, record) => {
                    return String(record.date)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Track Tanker",
                  dataIndex: "tracktanker",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.tracktanker)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Customer Address",
                  dataIndex: "customeraddress",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.customeraddress)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Status",
                  dataIndex: "status",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.status)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Track",
                  dataIndex: "track",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.track)
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

export default LiveOrders;
