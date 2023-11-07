import {
  Button,
  Input,
  Space,
  Drawer,
  Form,
  Switch,
  Table,
  Typography,
  Select,
  Upload,
  Modal,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useEffect, useState, useCallback } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

function Promotions() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/promotions");
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

  const addPromotions = async (values) => {
    setLoading(true);
    try {
      const endpoint = "http://localhost:3000/promotions";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        console.log(response);
        setAddNew(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAddNew(false);
      setLoading(false);
    }
  };

  useCallback(() => {
    addPromotions();
  }, []);

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Promotions</Typography.Title>
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
        title="Add New Promotions"
        open={addNew}
        onClose={() => {
          setAddNew(false);
        }}
      >
        <Form
          validateMessages={validateMessages}
          layout="horizontal"
          onFinish={addPromotions}
          style={{
            maxWidth: 900,
          }}
        >
          <Form.Item
            label="Offer Name"
            name="offerName"
            rules={[{ required: true, type: String }]}
          >
            <Input name="offerName" />
          </Form.Item>
          <Form.Item
            label="Tanker Type"
            name="tankerType"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Select"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "Sewage Tank",
                  label: "Sewage Tank",
                },
                {
                  value: "Water Tank",
                  label: "Water Tank",
                },
                {
                  value: "Both",
                  label: "Both",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Tanker Capacity"
            name="tankerCapacity"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Discount Type"
            name="discountType"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Discount Value"
            name="discountValue"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Image Path"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="imagePath" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Is Active" name="isActive" valuePropName="checked">
            <Switch name="isActive" />
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
        style={{ width: "100%" }}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        columns={[
          {
            title: "Offer Name",
            dataIndex: "offerName",
            sorter: (record1, record2) => {
              return record1.offerName > record2.offerName;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.offerName)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Tanker Type",
            dataIndex: "tankerType",
            sorter: (record1, record2) => {
              return record1.tankerType > record2.tankerType;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.tankerType)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Tanker Capacity",
            dataIndex: "tankerCapacity",
            sorter: (record1, record2) => {
              return record1.tankerCapacity > record2.tankerCapacity;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.tankerCapacity)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Discount Type",
            dataIndex: "discountType",
            sorter: (record1, record2) => {
              return record1.discountType > record2.discountType;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.discountType)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Discount Value",
            dataIndex: "discountValue",
            sorter: (record1, record2) => {
              return record1.discountValue > record2.discountValue;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.discountValue)
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
        title="Edit Promotion"
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
            label="Offer Name"
            rules={[{ required: true, type: "offerName" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Tanker Type" rules={[{ required: true }]}>
            <Select
              defaultValue="Select"
              value={selectedOption}
              onChange={(value) => setSelectedOption(value)}
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "sewage",
                  label: "Sewage Tank",
                },
                {
                  value: "water",
                  label: "Water Tank",
                },
                {
                  value: "both",
                  label: "Both",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Tanker Capacity" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Discount Type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Discount Value" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="imagePath"
            label="Image Path"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
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

export default Promotions;
