import { Button, Input, Space, Table, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function Promotions() {
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
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

export default Promotions;
