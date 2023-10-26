import { Button, Input, Rate, Space, Switch, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
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
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <FaRegEdit size={16} />
                </Button>
                <Button
                  type="primary"
                  danger
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <MdOutlineDeleteOutline size={16} />
                </Button>
              </ButtonGroup>
            ),
          },
        ]}
      />
    </Space>
  );
}

export default ReviewPage;
