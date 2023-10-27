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
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { UploadOutlined } from "@ant-design/icons";

function Promotions() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      offername: "Offer-1",
      tankertype: "Water Tank",
      tankercapacity: "300 Litre",
      discounttype: "Amount",
      discountvalue: "10%",
    },
    {
      offername: "Offer-2",
      tankertype: "Sewwage Tank",
      tankercapacity: "100 Litre",
      discounttype: "Amount",
      discountvalue: "10%",
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

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

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
          style={{
            maxWidth: 900,
          }}
        >
          <Form.Item
            label="Offer Name"
            rules={[{ required: true, type: "offername" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Tanker Capacity" rules={[{ required: true }]}>
            <Select
              defaultValue="Select"
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
          <Form.Item label="Discount Type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Discount Value" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="upload"
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
        pagination={false}
        columns={[
          {
            title: "Offer Name",
            dataIndex: "offername",
            sorter: (record1, record2) => {
              return record1.offername > record2.offername;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.offername)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Tanker Type",
            dataIndex: "tankertype",
            sorter: (record1, record2) => {
              return record1.tankertype > record2.tankertype;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.tankertype)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Tanker Capacity",
            dataIndex: "tankercapacity",
            sorter: (record1, record2) => {
              return record1.tankercapacity > record2.tankercapacity;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.tankercapacity)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Discount Type",
            dataIndex: "discounttype",
            sorter: (record1, record2) => {
              return record1.discounttype > record2.discounttype;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.discounttype)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Discount Value",
            dataIndex: "discountvalue",
            sorter: (record1, record2) => {
              return record1.discountvalue > record2.discountvalue;
            },
            filteredValue: [searchedText],
            onFilter: (value, record) => {
              return String(record.discountvalue)
                .toLowerCase()
                .includes(value.toLowerCase());
            },
          },
          {
            title: "Actions",
            render: () => (
              <ButtonGroup>
                <Button size="small">
                  <FaRegEdit size={12} />
                </Button>
                <Button type="primary" danger size="small">
                  <MdOutlineDeleteOutline size={12} />
                </Button>
              </ButtonGroup>
            ),
          },
        ]}
      />
    </Space>
  );
}

export default Promotions;
