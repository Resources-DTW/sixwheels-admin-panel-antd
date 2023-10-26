import {
  Button,
  Image,
  Layout,
  Menu,
  Dropdown,
  Space,
  Divider,
  theme,
} from "antd";
import "./App.css";
import "./styles/dashboard.css";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { BiHomeAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAdminPanelSettings, MdOutlinePayment } from "react-icons/md";
import { BsCarFront, BsStarHalf, BsFillBuildingFill } from "react-icons/bs";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line, RiAdvertisementLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
// import ButtonGroup from "antd/es/button/button-group";
import { useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Logo from "./assets/logo.png";
import { DownOutlined } from "@ant-design/icons";

const { useToken } = theme;
// const items = [
//   {
//     key: "1",
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         Profile
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         Settings
//       </a>
//     ),
//   },
// ];

function App() {
  const { token } = useToken();

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  // const fastestDelivery = [
  //   {
  //     "Service Provider Name": "",
  //   },
  // ];

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
          defaultSelectedKeys={["/"]}
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
              label: "Customer",
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
        <Header
          className="header"
          style={{
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <GiHamburgerMenu /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown
            // menu={{
            //   items,
            // }}
            dropdownRender={(menu) => (
              <div>
                {/* {React.cloneElement(menu)} */}
                <Divider
                  style={{
                    margin: 0,
                  }}
                />
                <Space
                  style={{
                    padding: 8,
                  }}
                >
                  <Button type="primary" danger>
                    Logout
                  </Button>
                </Space>
              </div>
            )}
          >
            {/* <a onClick={(e) => e.preventDefault()}> */}
            <Space>
              Admin
              <DownOutlined />
            </Space>
            {/* </a> */}
          </Dropdown>
        </Header>
        <Content className="content">
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Copyrights © 2023 <strong>Sixwheels</strong>. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
