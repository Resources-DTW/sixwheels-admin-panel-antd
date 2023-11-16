import {
  Input,
  Space,
  Table,
  Typography,
  Select,
  DatePicker,
  Button,
  Layout,
  Menu,
  Image,
} from "antd";
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

function OrderReports() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

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
          defaultSelectedKeys={["/order_reports"]}
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
            <Typography.Title level={4}>Order Reports</Typography.Title>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
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
              <Space direction="horizontal">
                <Select
                  defaultValue="Select Status"
                  style={{
                    width: 120,
                  }}
                  options={[
                    {
                      value: "new",
                      label: "New",
                    },
                    {
                      value: "delivered",
                      label: "Delivered",
                    },
                    {
                      value: "rejected",
                      label: "Rejected",
                    },
                  ]}
                />
                <Select
                  defaultValue="Tanker Type"
                  style={{
                    width: 120,
                  }}
                  options={[
                    {
                      value: "sewage",
                      label: "Sewage Tank",
                    },
                    {
                      value: "water",
                      label: "Water Tank",
                    },
                    {
                      value: "both",
                      label: "Both",
                    },
                  ]}
                />
                <RangePicker
                  showTime={{
                    format: "HH:mm",
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Space>
              <Button type="primary">Search</Button>
            </div>
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
                  title: "Service",
                  dataIndex: "service",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.service > record2.service;
                  },
                  onFilter: (value, record) => {
                    return String(record.service)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Cost",
                  dataIndex: "cost",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.cost)
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
                  title: "Start Date",
                  dataIndex: "startdate",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.startdate)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "End Date",
                  dataIndex: "enddate",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.enddate)
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

export default OrderReports;
