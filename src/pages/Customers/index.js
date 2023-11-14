import {
  Button,
  Drawer,
  Form,
  Input,
  Select,
  Space,
  Table,
  Typography,
  Popconfirm,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { HiShoppingCart } from "react-icons/hi";
import { Option } from "antd/es/mentions";
import axios from "axios";

function Customer() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [edit, setEdit] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/api/users"
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

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://rich-bass-cummerbund.cyclic.app/api/users/${id}`
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
      lastName: user.lastName || "",
      mobileNumber: user.mobileNumber || "",
      email: user.email || "",
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

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
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
            title: "Actions",
            render: (_, record) => (
              <ButtonGroup>
                <Button onClick={() => handleEdit(record)} size="small">
                  <FaRegEdit size={12} />
                </Button>
                <Button size="small">
                  <GrMapLocation size={12} />
                </Button>
                <Button size="small">
                  <HiShoppingCart size={12} />
                </Button>
                <Popconfirm
                  title="Are you sure want to delete?"
                  onConfirm={() => handleDelete(record._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button size="small" type="primary" danger>
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
          <Form.Item
            label="First Name"
            rules={[{ required: true, type: "fname" }]}
          >
            <Input
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            rules={[{ required: true, type: "lname" }]}
          >
            <Input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
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
  );
}

export default Customer;
