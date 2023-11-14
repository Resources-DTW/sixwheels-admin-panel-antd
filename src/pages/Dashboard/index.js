import { Card, Divider, Space, Statistic, Table, Typography } from "antd";
import { useState, useEffect } from "react";
import { PiCoinsThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineHomeRepairService } from "react-icons/md";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [customerCount, setCustomerCount] = useState([]);
  const [providersCount, SetProvidersCount] = useState([]);
  const [dataSource, setDataSource] = useState([
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
    {
      service_provider_name: "Sixwheels Water Supply",
      drivername: "Karthik",
      duration: "25mins",
      expectedtime: "30mins",
      deliveredtime: "25mins",
    },
  ]);

  const fetchCustomerCount = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/api/users"
      );
      if (response.ok) {
        const data = await response.json();
        setCustomerCount(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProvidersCount = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rich-bass-cummerbund.cyclic.app/provider"
      );
      if (response.ok) {
        const data = await response.json();
        SetProvidersCount(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts.
  useEffect(() => {
    fetchCustomerCount();
    fetchProvidersCount();
  }, []); // The empty dependency array ensures this runs only once.

  return (
    <>
      <Space direction="horizontal">
        <DashboardCard
          icon={<PiCoinsThin size={24} />}
          title={"Total Sale Of Weekly"}
          count={5}
        />
        <DashboardCard
          icon={<PiCoinsThin size={24} />}
          title={"Total Sale Of Monthly"}
          count={15}
        />
        <DashboardCard
          icon={<TbTruckDelivery size={24} />}
          title={"Total Orders Delivered"}
          count={2}
        />
        <DashboardCard
          icon={<BsBox2 size={24} />}
          title={"Total No Of Orders"}
          count={24}
        />
        <DashboardCard
          icon={<HiOutlineUsers size={24} />}
          title={"Total No Of Customers"}
          count={customerCount.length}
        />
        <DashboardCard
          icon={<MdOutlineHomeRepairService size={24} />}
          title={"Total No Of Service Providers"}
          count={providersCount.length}
        />
      </Space>
      <Divider />
      {/* <Card>
            <Steps
              current={1}
              items={[
                {
                  title: "Sign Up",
                  description: "Please sign up as admin to continue",
                },
              ]}
            />
          </Card> */}
      <Typography.Title style={{ fontSize: 24 }}>
        Fastest Time Of Delivery
      </Typography.Title>
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={[
          {
            dataIndex: "service_provider_name",
            title: "Service Provider Name",
            fixed: true,
          },
          {
            dataIndex: "drivername",
            title: "Driver Name",
          },
          {
            dataIndex: "duration",
            title: "Duration",
          },
          {
            dataIndex: "expectedtime",
            title: "Expected Time",
          },
          {
            dataIndex: "deliveredtime",
            title: "Delivered Time",
          },
          // {
          //   title: "Actions",
          //   render: () => (
          //     <ButtonGroup>
          //       <Button>Edit</Button>
          //       <Button type="primary" danger>
          //         Delete
          //       </Button>
          //     </ButtonGroup>
          //   ),
          // },
        ]}
      />
    </>
  );
}

function DashboardCard({ title, count, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={count} />
      </Space>
    </Card>
  );
}

export default Dashboard;
