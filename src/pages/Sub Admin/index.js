import {
  Button,
  Drawer,
  Input,
  Space,
  Table,
  Typography,
  Form,
  Switch,
  Select,
  Popconfirm,
  Layout,
  Menu,
  Image,
  Divider,
  Dropdown,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useEffect, useReducer, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Option } from "antd/es/mentions";
import axios from "axios";
import { Content, Footer, Header } from "antd/es/layout/layout";
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
import { GiHamburgerMenu } from "react-icons/gi";
import { LeftOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";

function SubAdmin() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    phoneNumber: "",
    emailAddress: "",
    isActive: false,
  });
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const addSubAdmin = async (values) => {
    setLoading(true);
    try {
      const endpoint =
        "https://rich-bass-cummerbund.cyclic.app/api/registeradmin";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        // console.log(response);
        setAddNew(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAddNew(false);
      setLoading(false);
    }
    forceUpdate();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/subadmin"
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

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      password: "${label} enter min 5 characters!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="971">+971</Option>
        <Option value="974">+974</Option>
        <Option value="965">+965</Option>
        <Option value="966">+966</Option>
      </Select>
    </Form.Item>
  );

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://rich-bass-cummerbund.cyclic.app/subadmin/${id}`
      );
      if (response.status === 200) {
        setLoading(false);
        fetchData();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEdit(true);
    setFormData({
      name: user.name || "",
      userName: user.userName || "",
      phoneNumber: user.phoneNumber || "",
      email: user.email || "",
      isActive: user.isActive || false,
    });
    // console.log(user);
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const userId = formData._id;

      const response = await axios.put(
        `https://rich-bass-cummerbund.cyclic.app/subadmin/${userId}`,
        formData
      );

      if (response.status === 200) {
        // Handle success, e.g., show a success message
        console.log("User updated successfully");
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error updating user:", error.response);
    } finally {
      setLoading(false);
      setEdit(false);
      // You may want to refresh the data or perform other actions after the update
    }
  };

  // Fetch data when the component mounts.
  useEffect(() => {
    fetchData();
  }, [ignored]); // The empty dependency array ensures this runs only once.

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
          defaultSelectedKeys={["/sub_admin"]}
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
            <Typography.Title level={4}>Sub Admin</Typography.Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 10,
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
              <Button
                onClick={() => setAddNew(true)}
                type="default"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  gap: 5,
                }}
              >
                <AiOutlinePlus /> Add New
              </Button>
            </div>
            <Drawer
              title="Add New Sub Admin"
              open={addNew}
              onClose={() => {
                setAddNew(false);
              }}
            >
              <Form
                validateMessages={validateMessages}
                layout="horizontal"
                onFinish={addSubAdmin}
                style={{
                  maxWidth: 900,
                }}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, type: "name" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="userName"
                  label="User Name"
                  rules={[{ required: true, type: "uname", min: 5, max: 99 }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="phoneNumber" label="Phone Number">
                  <Input
                    addonBefore={prefixSelector}
                    maxLength={10}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input required type="email-address" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="isActive"
                  label="Is Active"
                  valuePropName="checked"
                >
                  <Switch />
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
                      Confirm
                    </Button>
                    <Button type="default" onClick={() => setAddNew(false)}>
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </Drawer>
            <Table
              dataSource={dataSource}
              loading={loading}
              pagination={{
                pageSize: 6,
              }}
              columns={[
                {
                  title: "Name",
                  dataIndex: "name",
                  filteredValue: [searchedText],
                  sorter: (record1, record2) => {
                    return record1.name > record2.name;
                  },
                  onFilter: (value, record) => {
                    return String(record.name)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "User Name",
                  dataIndex: "userName",
                  sorter: (record1, record2) => {
                    return record1.userName > record2.userName;
                  },
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.userName)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Phone Number",
                  dataIndex: "phoneNumber",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.phoneNumber)
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
                  title: "Actions",
                  dataIndex: "_id",
                  render: (_, record) => (
                    <ButtonGroup>
                      <Button
                        onClick={() => handleEdit(record)}
                        size="small"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 5,
                        }}
                      >
                        <FaRegEdit size={12} />
                      </Button>
                      <Popconfirm
                        title="Are you sure want to delete?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          size="small"
                          type="primary"
                          danger
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 5,
                          }}
                        >
                          <MdOutlineDeleteOutline size={12} />
                        </Button>
                      </Popconfirm>
                    </ButtonGroup>
                  ),
                },
              ]}
            />
            <Drawer
              title="Edit Sub Admin"
              open={edit}
              onClose={() => {
                setEdit(false);
              }}
            >
              <Form
                validateMessages={validateMessages}
                layout="horizontal"
                onFinish={handleUpdate}
                style={{
                  maxWidth: 900,
                }}
              >
                <Form.Item
                  label="Name"
                  rules={[{ required: true, type: "name" }]}
                >
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="User Name"
                  rules={[{ required: true, type: "uname", min: 5, max: 99 }]}
                >
                  <Input
                    value={formData.userName}
                    onChange={(e) =>
                      setFormData({ ...formData, userName: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Phone Number">
                  <Input
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    type="email-address"
                  />
                </Form.Item>
                <Form.Item label="Is Active" valuePropName="checked">
                  <Switch />
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

export default SubAdmin;
