import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  Form,
  Image,
  Input,
  Layout,
  Menu,
  Modal,
  Rate,
  Select,
  Space,
  Switch,
  Table,
  Typography,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
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
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainHeader from "../../components/MainHeader";
import Sider from "antd/es/layout/Sider";
import { GiHamburgerMenu } from "react-icons/gi";
import { LeftOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";

function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      users: "Karthik",
      orderid: "SW-001",
      rating: "4.65",
      comments: "No comments",
      behaviour: "No",
      status: "Resolved",
    },
  ]);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/");
  };

  const user = localStorage.getItem("user");

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
          defaultSelectedKeys={["/review_page"]}
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
                  <Button type="primary" danger onClick={handleLogout}>
                    Logout
                  </Button>
                </Space>
              </div>
            )}
          >
            {/* <a onClick={(e) => e.preventDefault()}> */}
            <Space>
              {user}
              <DownOutlined />
            </Space>
            {/* </a> */}
          </Dropdown>
        </Header>
        <Content className="content">
          <Space size={20} direction="vertical">
            <Typography.Title level={4}>Review Page</Typography.Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 200,
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
              <Button type="primary">Save</Button>
            </div>
            <Table
              style={{ width: "100%" }}
              dataSource={dataSource}
              loading={loading}
              pagination={false}
              columns={[
                {
                  title: "Customer/Driver",
                  dataIndex: "users",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.users)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Order ID",
                  dataIndex: "orderid",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.orderid)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Rating",
                  dataIndex: "rating",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.rating)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                  render: (rating) => {
                    return <Rate value={rating} allowHalf disabled />;
                  },
                },
                {
                  title: "Comments",
                  dataIndex: "comments",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.comments)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Is Behaviour Bad",
                  dataIndex: "behaviour",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.behaviour)
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
                  title: "Actions",
                  render: () => (
                    <ButtonGroup>
                      <Button
                        onClick={() => {
                          setEdit(true);
                        }}
                        size="small"
                      >
                        <FaRegEdit size={12} />
                      </Button>
                      <Button
                        onClick={showModal}
                        type="primary"
                        danger
                        size="small"
                      >
                        <MdOutlineDeleteOutline size={12} />
                      </Button>
                    </ButtonGroup>
                  ),
                },
              ]}
            />
            <Modal
              title="Are you sure want to delete?"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button type="default" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button type="primary" danger onClick={handleOk}>
                  Delete
                </Button>,
              ]}
            >
              <p>Click delete to remove</p>
              {/* <p>Some contents...</p>
        <p>Some contents...</p> */}
            </Modal>
            <Drawer
              title="Update Review Status"
              open={edit}
              onClose={() => {
                setEdit(false);
              }}
            >
              <Form
                layout="horizontal"
                style={{
                  maxWidth: 900,
                }}
              >
                <Form.Item label="Status" rules={[{ required: true }]}>
                  <Select
                    defaultValue="Select"
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "resolved",
                        label: "Resolved",
                      },
                      {
                        value: "pending",
                        label: "Pending",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item>
                  <div
                    style={{
                      gap: 10,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                    <Button type="default" onClick={() => setEdit(false)}>
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </Drawer>
          </Space>
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Copyrights © 2023 <strong>Sixwheels</strong>. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ReviewPage;
