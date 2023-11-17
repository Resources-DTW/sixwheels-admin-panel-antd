import {
  Button,
  Input,
  Space,
  Table,
  Typography,
  Drawer,
  Form,
  Switch,
  Select,
  DatePicker,
  Popconfirm,
  Layout,
  Menu,
  Image,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState, useEffect, useReducer } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Option } from "antd/es/mentions";
import axios from "axios";
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

function Drivers() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [edit, setEdit] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [formData, setFormData] = useState({
    firstName: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    license: "",
    serviceProvider: "",
  });
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/drivers"
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
    forceUpdate();
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://rich-bass-cummerbund.cyclic.app/drivers/${id}`
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
      firstName: user.firstName || "",
      dateOfBirth: user.dateOfBirth || "",
      mobileNumber: user.mobileNumber || "",
      email: user.email || "",
      license: user.license || "",
      serviceProvider: user.serviceProvider || "",
    });
    console.log(user);
  };

  // Fetch data when the component mounts.
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures this runs only once.

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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
          defaultSelectedKeys={["/drivers"]}
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
            <Typography.Title level={4}>Drivers</Typography.Title>
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
                  title: "Name",
                  dataIndex: "firstName",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.firstName)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Date Of Birth",
                  dataIndex: "dateOfBirth",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.dateOfBirth)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Mobile Number",
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
                  title: "License No",
                  dataIndex: "license",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.license)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Service Provider Name",
                  dataIndex: "serviceProvider",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.serviceProvider)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Privacy Policy Status",
                  dataIndex: "policyAccepted",
                  filteredValue: [searchedText],
                  onFilter: (value, record) => {
                    return String(record.policyAccepted)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                {
                  title: "Actions",
                  render: (_, record) => (
                    <ButtonGroup>
                      <Button onClick={() => handleEdit(record)} size="small">
                        <FaRegEdit size={12} />
                      </Button>
                      <Button size="small">
                        <GrMapLocation size={12} />
                      </Button>
                      <Popconfirm
                        title="Are you sure want to delete?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button type="primary" danger size="small">
                          <MdOutlineDeleteOutline size={12} />
                        </Button>
                      </Popconfirm>
                    </ButtonGroup>
                  ),
                },
              ]}
            />
            <Drawer
              title="Edit Driver"
              open={edit}
              onClose={() => {
                setEdit(false);
              }}
            >
              <Form
                validateMessages={validateMessages}
                layout="horizontal"
                style={{
                  maxWidth: 900,
                }}
              >
                <Form.Item label="Name" rules={[{ required: true }]}>
                  <Input
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Date Of Birth">
                  <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item label="Mobile Number">
                  <Input
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value })
                    }
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Email ID"
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
                <Form.Item label="License No">
                  <Input
                    value={formData.license}
                    onChange={(e) =>
                      setFormData({ ...formData, license: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Service Provider Name"
                  rules={[{ required: true }]}
                >
                  <Select
                    defaultValue="Select"
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "test1",
                        label: "Test1",
                      },
                      {
                        value: "test2",
                        label: "Test2",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Privacy Policy Status"
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

export default Drivers;
