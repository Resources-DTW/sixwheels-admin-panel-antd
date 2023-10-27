import {
  Button,
  Input,
  Space,
  Table,
  Typography,
  Modal,
  Drawer,
  Form,
  Switch,
  Select,
  DatePicker,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Option } from "antd/es/mentions";

function Drivers() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
    },
    {
      name: "Karthik",
      dob: "10-06-2001",
      mobilenumber: "8807443477",
      email: "karthik.digitaltechworks@gmail.com",
      license: "TN192873126398",
      service_provider_name: "Sixwheels Water Service",
      privacy_policy: "Accepted",
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
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
            dataIndex: "name",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.name)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Date Of Birth",
            dataIndex: "dob",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.dob)
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
            dataIndex: "service_provider_name",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.service_provider_name)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Privacy Policy Status",
            dataIndex: "privacy_policy",
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.privacy_policy)
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
                <Button size="small">
                  <GrMapLocation size={12} />
                </Button>
                <Button onClick={showModal} type="primary" danger size="small">
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
          <Form.Item label="Name" rules={[{ required: true, type: "name" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date Of Birth">
            <DatePicker onChange={onChange} />
          </Form.Item>
          <Form.Item label="Mobile Number">
            <Input
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
            <Input required type="email-address" />
          </Form.Item>
          <Form.Item label="License No">
            <Input />
          </Form.Item>
          <Form.Item label="Service Provider Name" rules={[{ required: true }]}>
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
          <Form.Item label="Privacy Policy Status" valuePropName="checked">
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

export default Drivers;
