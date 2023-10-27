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
  Modal,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Option } from "antd/es/mentions";

function SubAdmin() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
    {
      name: "Karthik",
      username: "karthik",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
    },
  ]);

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          onClick={() => {
            setAddNew(true);
          }}
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
          style={{
            maxWidth: 900,
          }}
        >
          <Form.Item label="Name" rules={[{ required: true, type: "name" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="User Name"
            rules={[{ required: true, type: "uname", min: 5, max: 99 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input
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
            <Input required type="email-address" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
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
            sorter: (record1, record2) => {
              return record1.name > record2.name;
            },
          },
          {
            title: "User Name",
            dataIndex: "username",
            sorter: (record1, record2) => {
              return record1.username > record2.username;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.username)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Mobile Number",
            dataIndex: "mobilenumber",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.mobilenumber)
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
            render: () => (
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setEdit(true);
                  }}
                  size="small"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <FaRegEdit size={12} />
                </Button>
                <Button
                  onClick={showModal}
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
        title="Edit Sub Admin"
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
          <Form.Item label="Name" rules={[{ required: true, type: "name" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="User Name"
            rules={[{ required: true, type: "uname", min: 5, max: 99 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input
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
            <Input required type="email-address" />
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
