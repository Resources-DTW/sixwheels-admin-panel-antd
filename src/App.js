import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Content, Footer } from "antd/es/layout/layout";
import { Image, Layout, Menu } from "antd";
import MainHeader from "./components/MainHeader";
import Sider from "antd/es/layout/Sider";
import Logo from "./assets/logo.png";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineAdminPanelSettings, MdOutlinePayment } from "react-icons/md";
import { BsCarFront, BsStarHalf, BsFillBuildingFill } from "react-icons/bs";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line, RiAdvertisementLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import Dashboard from "./pages/Dashboard";

function App() {
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
          defaultSelectedKeys={["/dashboard"]}
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
          <Dashboard />
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Copyrights © 2023 <strong>Sixwheels</strong>. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
