import {
  Button,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  Switch,
  Table,
  Typography,
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

function PaymentMethod() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      mode: "Apple Pay",
    },
    {
      mode: "Google Pay",
    },
    {
      mode: "PayTM",
    },
    {
      mode: "Cash",
    },
    {
      mode: "Card",
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
          defaultSelectedKeys={["/payment_method"]}
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
            <Typography.Title level={4}>Payment Method</Typography.Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 200,
              }}
            >
              <Input.Search
                placeholder="Search here..."
                onSearch={(value) => {
                  setSearchedText(value);
                }}
                onChange={(e) => setSearchedText(e.target.value)}
              />
              <Button type="primary">Save</Button>
            </div>
            <Table
              style={{ width: "100%" }}
              dataSource={dataSource}
              loading={loading}
              pagination={false}
              columns={[
                {
                  title: "Mode",
                  dataIndex: "mode",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.mode)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Actions",
                  render: () => <Switch defaultChecked />,
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

export default PaymentMethod;
