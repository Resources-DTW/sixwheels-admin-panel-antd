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
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useEffect, useReducer, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Option } from "antd/es/mentions";
import axios from "axios";

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

  const addSubAdmin = async (values) => {
    setLoading(true);
    try {
      const endpoint = "http://localhost:3000/api/registeradmin";
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
      const response = await fetch("http://localhost:3000/subadmin");
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
        `http://localhost:3000/subadmin/${id}`
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
        `http://localhost:3000/subadmin/${userId}`,
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

  return (
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
          <Form.Item name="isActive" label="Is Active" valuePropName="checked">
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
          <Form.Item label="Name" rules={[{ required: true, type: "name" }]}>
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
  );
}

export default SubAdmin;
