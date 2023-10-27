import {
  Button,
  Drawer,
  Form,
  Input,
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
                {
                  value: "rejected",
                  label: "Rejected",
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
  );
}

export default ReviewPage;
